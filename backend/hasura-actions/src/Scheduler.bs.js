// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Decco = require("decco/src/Decco.bs.js");
var Fetch = require("bs-fetch/src/Fetch.bs.js");
var Query = require("./Query.bs.js");
var BnJs = require("bn.js");
var BsCron = require("bs-cron/src/BsCron.bs.js");
var Dotenv = require("dotenv");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var CONSTANTS = require("./CONSTANTS.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var PaymentStreamManager = require("./PaymentStreamManager.bs.js");

Dotenv.config();

function makePaymentRequest_encode(v) {
  return Js_dict.fromArray([
              [
                "amount",
                Decco.stringToJson(v.amount)
              ],
              [
                "identifier",
                Decco.optionToJson(Decco.stringToJson, v.identifier)
              ]
            ]);
}

function makePayment(recipientAddress, paymentData) {
  console.log("making payment");
  var remainingPayments = paymentData.numberOfPayments.sub(paymentData.numberOfPaymentsMade);
  var intervalInSeconds = paymentData.interval.mul(CONSTANTS.big60);
  var extraPayments = paymentData.currentPayment.sub(paymentData.nextPayment).div(intervalInSeconds);
  var extraPaymentsMade = extraPayments.add(CONSTANTS.big1);
  var finalPayment = BnJs.min(extraPaymentsMade, remainingPayments);
  var finalAmount = paymentData.amount.mul(finalPayment);
  PaymentStreamManager.addPaymentEntry(paymentData.streamID, paymentData.nextPayment.toNumber(), finalAmount.toString());
  var totalPayments = paymentData.numberOfPaymentsMade.add(finalPayment);
  if (paymentData.numberOfPayments.eq(totalPayments)) {
    PaymentStreamManager.closeStreamEntry(paymentData.streamID, paymentData.numberOfPayments.toNumber());
  } else {
    var newPaymentsMade = paymentData.numberOfPaymentsMade.add(finalPayment);
    var intervalInSeconds$1 = paymentData.interval.mul(CONSTANTS.big60);
    var newNextPayment = paymentData.nextPayment.add(finalPayment.mul(intervalInSeconds$1));
    PaymentStreamManager.updateStreamEntry(paymentData.streamID, newPaymentsMade.toNumber(), newNextPayment.toNumber(), paymentData.nextPayment.toNumber());
  }
  var address = Belt_Option.getWithDefault(process.env.HUB_ADDRESS, "http://raiden1:5001");
  var requestString = address + "/api/v1/payments/0xC563388e2e2fdD422166eD5E76971D11eD37A466/" + recipientAddress;
  console.log(requestString, finalAmount.toString());
  return fetch(requestString, Fetch.RequestInit.make(/* Post */2, {
                        "Content-Type": "application/json"
                      }, Caml_option.some(JSON.stringify(makePaymentRequest_encode({
                                    amount: finalAmount.toString(),
                                    identifier: undefined
                                  }))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(undefined)).then(function (prim) {
                return prim.json();
              }).then(function (json) {
              console.log("THE RESULT:", json);
              if (JSON.stringify(json).includes("errors") === false) {
                console.log("SUCCESS");
              } else {
                console.log("ERROR");
              }
              
            });
}

function getTimestamp(date) {
  return date.getTime() / 1000.0 | 0;
}

function fromTimeStampToDate(timestamp) {
  return new Date(timestamp * 1000.0);
}

function getCurrentTimestamp(param) {
  return getTimestamp(new Date());
}

function startProcess(param) {
  var now = getTimestamp(new Date());
  console.log("start timestamp:", now);
  var job = BsCron.CronJob.make({
        NAME: "CronString",
        VAL: "* * * * *"
      }, (function (param) {
          var currentTimestamp = getTimestamp(new Date());
          console.log("current timestamp:", currentTimestamp);
          Curry._6(PaymentStreamManager.gqlClient.reason_query, {
                  query: Query.GetStreamData.query,
                  Raw: Query.GetStreamData.Raw,
                  parse: Query.GetStreamData.parse,
                  serialize: Query.GetStreamData.serialize,
                  serializeVariables: Query.GetStreamData.serializeVariables
                }, undefined, undefined, undefined, undefined, Query.GetStreamData.makeVariables(currentTimestamp, undefined)).then(function (result) {
                if (result.TAG === /* Ok */0) {
                  var streams = result._0.data.streams;
                  console.log("payment streams in focus:", streams);
                  Belt_Array.map(streams, (function (stream) {
                          var userId = stream.id;
                          var recipient = stream.recipient;
                          var amount = stream.amount;
                          var nextPayment = stream.nextPayment;
                          var lastPayment = stream.lastPayment;
                          var interval = stream.interval;
                          var numberOfPayments = stream.numberOfPayments;
                          var numberOfPaymentsMade = stream.numberOfPaymentsMade;
                          var currentPayment = new BnJs(currentTimestamp);
                          var paymentData = {
                            streamID: userId,
                            amount: amount,
                            interval: interval,
                            numberOfPayments: numberOfPayments,
                            numberOfPaymentsMade: numberOfPaymentsMade,
                            currentPayment: currentPayment,
                            nextPayment: nextPayment
                          };
                          if (lastPayment === 0) {
                            makePayment(recipient, paymentData);
                          } else {
                            Curry._6(PaymentStreamManager.gqlClient.reason_query, {
                                    query: Query.GetLatestPayment.query,
                                    Raw: Query.GetLatestPayment.Raw,
                                    parse: Query.GetLatestPayment.parse,
                                    serialize: Query.GetLatestPayment.serialize,
                                    serializeVariables: Query.GetLatestPayment.serializeVariables
                                  }, undefined, undefined, undefined, undefined, Query.GetLatestPayment.makeVariables(userId, lastPayment, undefined)).then(function (result) {
                                  if (result.TAG === /* Ok */0) {
                                    Belt_Array.map(result._0.data.payments, (function (payment) {
                                            var paymentState = payment.paymentState;
                                            if (paymentState === "COMPLETE") {
                                              console.log("last payment is COMPLETE");
                                              makePayment(recipient, paymentData);
                                            }
                                            if (paymentState === "PENDING") {
                                              console.log("last payment is PENDING");
                                            }
                                            if (paymentState === "ERROR") {
                                              console.log("last payment is ERROR");
                                              return ;
                                            }
                                            
                                          }));
                                    return ;
                                  }
                                  console.log("error last payment: ", result._0);
                                  
                                });
                          }
                          
                        }));
                  return ;
                }
                console.log("error retrieving stream data", result._0);
                
              });
          
        }), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  job.start();
  
}

exports.makePaymentRequest_encode = makePaymentRequest_encode;
exports.makePayment = makePayment;
exports.getTimestamp = getTimestamp;
exports.fromTimeStampToDate = fromTimeStampToDate;
exports.getCurrentTimestamp = getCurrentTimestamp;
exports.startProcess = startProcess;
/*  Not a pure module */