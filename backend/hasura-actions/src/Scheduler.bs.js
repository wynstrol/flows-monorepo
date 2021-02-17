// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Decco = require("decco/src/Decco.bs.js");
var Query = require("./Query.bs.js");
var BnJs = require("bn.js");
var BsCron = require("bs-cron/src/BsCron.bs.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var CONSTANTS = require("./CONSTANTS.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var PaymentStreamManager = require("./PaymentStreamManager.bs.js");

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

function makePayment(recipientAddress, amount, streamID, currentPayment) {
  console.log("making payment");
  Curry.app(PaymentStreamManager.gqlClient.reason_mutate, [
          {
            query: Query.AddNewPayment.query,
            Raw: Query.AddNewPayment.Raw,
            parse: Query.AddNewPayment.parse,
            serialize: Query.AddNewPayment.serialize,
            serializeVariables: Query.AddNewPayment.serializeVariables
          },
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          Query.AddNewPayment.makeVariables(streamID, currentPayment.toNumber(), "PENDING", amount, undefined)
        ]).then(function (result) {
        if (result.TAG === /* Ok */0) {
          console.log("success payment added");
          return ;
        }
        console.log("error payment added: ", result._0);
        
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
                          if (lastPayment !== 0) {
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
                                              var remainingPayments = numberOfPayments.sub(numberOfPaymentsMade);
                                              var intervalInSeconds = interval.mul(CONSTANTS.big60);
                                              var extraPayments = currentPayment.sub(nextPayment).div(intervalInSeconds);
                                              var extraPaymentsMade = extraPayments.add(CONSTANTS.big1);
                                              var finalPayment = BnJs.min(extraPaymentsMade, remainingPayments);
                                              var finalAmount = amount.mul(finalPayment);
                                              makePayment(recipient, finalAmount.toString(), userId, nextPayment);
                                              if (Caml_obj.caml_equal(numberOfPayments, numberOfPaymentsMade.add(finalPayment))) {
                                                Curry.app(PaymentStreamManager.gqlClient.reason_mutate, [
                                                        {
                                                          query: Query.CloseStreamEntry.query,
                                                          Raw: Query.CloseStreamEntry.Raw,
                                                          parse: Query.CloseStreamEntry.parse,
                                                          serialize: Query.CloseStreamEntry.serialize,
                                                          serializeVariables: Query.CloseStreamEntry.serializeVariables
                                                        },
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        Query.CloseStreamEntry.makeVariables(userId, numberOfPayments.toNumber(), "CLOSED", undefined)
                                                      ]).then(function (result) {
                                                      if (result.TAG === /* Ok */0) {
                                                        console.log("success close entry: CLOSED");
                                                        return ;
                                                      }
                                                      console.log("error close entry: ", result._0);
                                                      
                                                    });
                                              } else {
                                                var newPaymentsMade = numberOfPaymentsMade.add(finalPayment);
                                                var intervalInSeconds$1 = interval.mul(CONSTANTS.big60);
                                                var newNextPayment = nextPayment.add(finalPayment.mul(intervalInSeconds$1));
                                                Curry.app(PaymentStreamManager.gqlClient.reason_mutate, [
                                                        {
                                                          query: Query.UpdateStreamEntry.query,
                                                          Raw: Query.UpdateStreamEntry.Raw,
                                                          parse: Query.UpdateStreamEntry.parse,
                                                          serialize: Query.UpdateStreamEntry.serialize,
                                                          serializeVariables: Query.UpdateStreamEntry.serializeVariables
                                                        },
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        Query.UpdateStreamEntry.makeVariables(userId, newPaymentsMade.toNumber(), newNextPayment.toNumber(), nextPayment.toNumber(), undefined)
                                                      ]).then(function (result) {
                                                      if (result.TAG === /* Ok */0) {
                                                        console.log("success payment made: ", newPaymentsMade, newNextPayment);
                                                        return ;
                                                      }
                                                      console.log("error payment made: ", result._0);
                                                      
                                                    });
                                              }
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
                            return ;
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
/* Query Not a pure module */
