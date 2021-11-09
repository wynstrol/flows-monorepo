// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Decco = require("decco/src/Decco.bs.js");
var Query = require("./Query.bs.js");
var Serbet = require("serbet/src/Serbet.bs.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var ClientConfig = require("./gql/ClientConfig.bs.js");

function streamData_decode(v) {
  var dict = Js_json.classify(v);
  if (typeof dict === "number") {
    return Decco.error(undefined, "Not an object", v);
  }
  if (dict.TAG !== /* JSONObject */2) {
    return Decco.error(undefined, "Not an object", v);
  }
  var dict$1 = dict._0;
  var userAddress = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "userAddress"), null));
  if (userAddress.TAG === /* Ok */0) {
    var tokenAddress = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "tokenAddress"), null));
    if (tokenAddress.TAG === /* Ok */0) {
      var amount = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "amount"), null));
      if (amount.TAG === /* Ok */0) {
        var numberOfPayments = Decco.intFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "numberOfPayments"), null));
        if (numberOfPayments.TAG === /* Ok */0) {
          var interval = Decco.intFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "interval"), null));
          if (interval.TAG === /* Ok */0) {
            var startPayment = Decco.intFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "startPayment"), null));
            if (startPayment.TAG === /* Ok */0) {
              return {
                      TAG: /* Ok */0,
                      _0: {
                        userAddress: userAddress._0,
                        tokenAddress: tokenAddress._0,
                        amount: amount._0,
                        numberOfPayments: numberOfPayments._0,
                        interval: interval._0,
                        startPayment: startPayment._0
                      }
                    };
            }
            var e = startPayment._0;
            return {
                    TAG: /* Error */1,
                    _0: {
                      path: ".startPayment" + e.path,
                      message: e.message,
                      value: e.value
                    }
                  };
          }
          var e$1 = interval._0;
          return {
                  TAG: /* Error */1,
                  _0: {
                    path: ".interval" + e$1.path,
                    message: e$1.message,
                    value: e$1.value
                  }
                };
        }
        var e$2 = numberOfPayments._0;
        return {
                TAG: /* Error */1,
                _0: {
                  path: ".numberOfPayments" + e$2.path,
                  message: e$2.message,
                  value: e$2.value
                }
              };
      }
      var e$3 = amount._0;
      return {
              TAG: /* Error */1,
              _0: {
                path: ".amount" + e$3.path,
                message: e$3.message,
                value: e$3.value
              }
            };
    }
    var e$4 = tokenAddress._0;
    return {
            TAG: /* Error */1,
            _0: {
              path: ".tokenAddress" + e$4.path,
              message: e$4.message,
              value: e$4.value
            }
          };
  }
  var e$5 = userAddress._0;
  return {
          TAG: /* Error */1,
          _0: {
            path: ".userAddress" + e$5.path,
            message: e$5.message,
            value: e$5.value
          }
        };
}

function body_in_decode(v) {
  var dict = Js_json.classify(v);
  if (typeof dict === "number") {
    return Decco.error(undefined, "Not an object", v);
  }
  if (dict.TAG !== /* JSONObject */2) {
    return Decco.error(undefined, "Not an object", v);
  }
  var input = streamData_decode(Belt_Option.getWithDefault(Js_dict.get(dict._0, "input"), null));
  if (input.TAG === /* Ok */0) {
    return {
            TAG: /* Ok */0,
            _0: {
              input: input._0
            }
          };
  }
  var e = input._0;
  return {
          TAG: /* Error */1,
          _0: {
            path: ".input" + e.path,
            message: e.message,
            value: e.value
          }
        };
}

function body_out_encode(v) {
  return Js_dict.fromArray([
              [
                "success",
                Decco.boolToJson(v.success)
              ],
              [
                "error",
                Decco.optionToJson(Decco.stringToJson, v.error)
              ]
            ]);
}

var gqlClient = ClientConfig.createInstance({
      "x-hasura-admin-secret": "testing"
    }, "http://graphql-engine:8080/v1/graphql", undefined);

var createStream = Serbet.endpoint(undefined, {
      path: "/create-stream",
      verb: /* POST */1,
      handler: (function (req) {
          return Curry._1(req.requireBody, body_in_decode).then(function (param) {
                      var match = param.input;
                      var startPayment = match.startPayment;
                      return Curry.app(gqlClient.reason_mutate, [
                                    {
                                      query: Query.CreatePaymentStream.query,
                                      Raw: Query.CreatePaymentStream.Raw,
                                      parse: Query.CreatePaymentStream.parse,
                                      serialize: Query.CreatePaymentStream.serialize,
                                      serializeVariables: Query.CreatePaymentStream.serializeVariables
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
                                    Query.CreatePaymentStream.makeVariables(match.amount, match.interval, match.numberOfPayments, match.userAddress, startPayment, "OPEN", match.tokenAddress, startPayment, undefined)
                                  ]).then(function (result) {
                                  var tmp;
                                  tmp = result.TAG === /* Ok */0 ? ({
                                        success: true,
                                        error: undefined
                                      }) : ({
                                        success: false,
                                        error: result._0.message
                                      });
                                  return {
                                          TAG: /* OkJson */4,
                                          _0: body_out_encode(tmp)
                                        };
                                });
                    });
        })
    });

function addPaymentEntry(streamID, timestamp, amount) {
  Curry.app(gqlClient.reason_mutate, [
          {
            query: Query.AddPaymentEntry.query,
            Raw: Query.AddPaymentEntry.Raw,
            parse: Query.AddPaymentEntry.parse,
            serialize: Query.AddPaymentEntry.serialize,
            serializeVariables: Query.AddPaymentEntry.serializeVariables
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
          Query.AddPaymentEntry.makeVariables(streamID, timestamp, "COMPLETE", amount, undefined)
        ]).then(function (result) {
        if (result.TAG === /* Ok */0) {
          console.log("success payment added", result._0.data.insert_payments_one);
          return ;
        }
        console.log("error payment added: ", result._0);
        
      });
  
}

function updatePaymentEntry(paymentID, state) {
  Curry.app(gqlClient.reason_mutate, [
          {
            query: Query.UpdatePaymentEntry.query,
            Raw: Query.UpdatePaymentEntry.Raw,
            parse: Query.UpdatePaymentEntry.parse,
            serialize: Query.UpdatePaymentEntry.serialize,
            serializeVariables: Query.UpdatePaymentEntry.serializeVariables
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
          Query.UpdatePaymentEntry.makeVariables(paymentID, state, undefined)
        ]).then(function (result) {
        if (result.TAG === /* Ok */0) {
          console.log("success update payment: ", state);
          return ;
        }
        console.log("error update payment: ", state, result._0);
        
      });
  
}

function updateStreamEntry(streamID, totalPaymentsMade, nextPayment, lastPayment) {
  Curry.app(gqlClient.reason_mutate, [
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
          Query.UpdateStreamEntry.makeVariables(streamID, totalPaymentsMade, nextPayment, lastPayment, undefined)
        ]).then(function (result) {
        if (result.TAG === /* Ok */0) {
          console.log("success payment made: ", totalPaymentsMade, nextPayment);
          return ;
        }
        console.log("error payment made: ", result._0);
        
      });
  
}

function closeStreamEntry(streamID, totalPaymentsMade) {
  Curry.app(gqlClient.reason_mutate, [
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
          Query.CloseStreamEntry.makeVariables(streamID, totalPaymentsMade, "CLOSED", undefined)
        ]).then(function (result) {
        if (result.TAG === /* Ok */0) {
          console.log("success close entry: CLOSED");
          return ;
        }
        console.log("error close entry: ", result._0);
        
      });
  
}

function addUser(username, ethAddress, description) {
  Curry.app(gqlClient.reason_mutate, [
          {
            query: Query.AddUser.query,
            Raw: Query.AddUser.Raw,
            parse: Query.AddUser.parse,
            serialize: Query.AddUser.serialize,
            serializeVariables: Query.AddUser.serializeVariables
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
          Query.AddUser.makeVariables(username, ethAddress, description, undefined)
        ]).then(function (result) {
        if (result.TAG === /* Ok */0) {
          console.log("success user added");
          return ;
        }
        console.log("error user added: ", result._0);
        
      });
  
}

var ApolloQueryResult;

exports.ApolloQueryResult = ApolloQueryResult;
exports.streamData_decode = streamData_decode;
exports.body_in_decode = body_in_decode;
exports.body_out_encode = body_out_encode;
exports.gqlClient = gqlClient;
exports.createStream = createStream;
exports.addPaymentEntry = addPaymentEntry;
exports.updatePaymentEntry = updatePaymentEntry;
exports.updateStreamEntry = updateStreamEntry;
exports.closeStreamEntry = closeStreamEntry;
exports.addUser = addUser;
/* gqlClient Not a pure module */
