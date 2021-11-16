// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Ethers from "ethers";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Ethers$FlowsUserApp from "../lib/Ethers/Ethers.bs.js";
import * as Queries$FlowsUserApp from "../Queries.bs.js";
import EthereumBlockiesBase64 from "ethereum-blockies-base64";
import * as DisplayAddress$FlowsUserApp from "./DisplayAddress.bs.js";

function fromTimeStampToDate(timestamp) {
  return new Date(timestamp * 1000.0).toDateString();
}

function fromTimeStampToTime(timestamp) {
  return new Date(timestamp * 1000.0).toLocaleTimeString();
}

function PaymentHistoryTable$History(Props) {
  var paymentHistoryQuery = Props.paymentHistoryQuery;
  var match = paymentHistoryQuery.data;
  if (match === undefined && paymentHistoryQuery.loading) {
    return React.createElement("p", undefined, "Loading");
  }
  var error = paymentHistoryQuery.error;
  if (error !== undefined) {
    console.log(error);
    return React.createElement("p", undefined, "Data is loaded");
  } else if (match !== undefined) {
    return React.createElement("table", {
                className: "min-w-full divide-y divide-gray-200"
              }, React.createElement("thead", {
                    className: "bg-black"
                  }, React.createElement("tr", undefined, React.createElement("th", {
                            className: "px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
                            scope: "col"
                          }, "Receiver"), React.createElement("th", {
                            className: "px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
                            scope: "col"
                          }, "Token"), React.createElement("th", {
                            className: "px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
                            scope: "col"
                          }, "Amount"), React.createElement("th", {
                            className: "px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider",
                            scope: "col"
                          }, "Payment Timestamp"), React.createElement("th", {
                            className: "relative px-5 py-4",
                            scope: "col"
                          }, React.createElement("span", {
                                className: "sr-only"
                              }, "Edit")), React.createElement("th", {
                            className: "relative px-5 py-4",
                            scope: "col"
                          }, React.createElement("span", {
                                className: "sr-only"
                              }, "Delete")))), Belt_Array.map(match.payments, (function (payment) {
                      return React.createElement("tbody", {
                                  key: String(payment.id),
                                  className: "bg-white divide-y divide-black"
                                }, React.createElement("tr", undefined, React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap"
                                        }, React.createElement("div", {
                                              className: "flex items-center"
                                            }, React.createElement("div", {
                                                  className: "flex-shrink-0 h-10 w-10"
                                                }, React.createElement("img", {
                                                      src: EthereumBlockiesBase64(payment.stream.user.ethAddress)
                                                    })), React.createElement("div", {
                                                  className: "ml-4"
                                                }, React.createElement("div", {
                                                      className: "text-sm font-medium text-gray-900"
                                                    }, payment.stream.user.name), React.createElement("div", {
                                                      className: "text-sm text-gray-500"
                                                    }, React.createElement(DisplayAddress$FlowsUserApp.make, {
                                                          address: payment.stream.user.ethAddress
                                                        }))))), React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap text-sm text-gray-800"
                                        }, payment.stream.paymentToken.name), React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap text-sm text-gray-800"
                                        }, Ethers$FlowsUserApp.Utils.formatEther(Ethers.BigNumber.from(payment.paymentAmount.toString()))), React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap text-sm text-gray-800"
                                        }, React.createElement("div", {
                                              className: "flex items-center"
                                            }, React.createElement("div", {
                                                  className: ""
                                                }, React.createElement("div", {
                                                      className: "text-sm font-medium text-gray-900"
                                                    }, fromTimeStampToDate(payment.paymentTimestamp.toNumber())), React.createElement("div", {
                                                      className: "text-sm font-medium text-gray-900"
                                                    }, fromTimeStampToTime(payment.paymentTimestamp.toNumber())))))));
                    })));
  } else {
    return React.createElement("p", undefined, "Error loading data");
  }
}

var $$History = {
  make: PaymentHistoryTable$History
};

function PaymentHistoryTable(Props) {
  var paymentHistoryQuery = Curry.app(Queries$FlowsUserApp.ViewPaymentHistory.use, [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      ]);
  return React.createElement("div", {
              className: "flex flex-col"
            }, React.createElement("div", {
                  className: "my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
                }, React.createElement("div", {
                      className: "py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8"
                    }, React.createElement("div", {
                          className: "shadow overflow-hidden border border-black rounded"
                        }, React.createElement(PaymentHistoryTable$History, {
                              paymentHistoryQuery: paymentHistoryQuery
                            })))));
}

var make = PaymentHistoryTable;

export {
  fromTimeStampToDate ,
  fromTimeStampToTime ,
  $$History ,
  make ,
  
}
/* react Not a pure module */