// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Heading$FlowsUserApp from "../components/Heading.bs.js";
import * as StreamsTable$FlowsUserApp from "../components/StreamsTable.bs.js";
import * as PaymentHistoryTable$FlowsUserApp from "../components/PaymentHistoryTable.bs.js";

function Dashboard(Props) {
  return React.createElement("div", {
              className: "container max-w-3xl mx-auto"
            }, React.createElement("div", {
                  className: "border-gray-500 border-2 rounded-lg"
                }, React.createElement("div", {
                      className: "mt-1 -mb-1"
                    }, React.createElement(Heading$FlowsUserApp.make, {
                          children: "Raiden Node"
                        })), React.createElement("div", {
                      className: "text-center text-sm text-gray-500"
                    }, "0x2D5ED5dc97adC88bBDf69814B90F64a4C5495D81"), React.createElement("div", {
                      className: "m-1 grid grid-cols-1 gap-4 md:grid-cols-1"
                    }, React.createElement("div", {
                          className: "text-center"
                        }, React.createElement("button", {
                              className: "mt-3 w-full inline-flex justify-center border-b-2 border border-black shadow-sm px-6 py-2 bg-white text-base font-large text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-2xl rounded",
                              onClick: (function (param) {
                                  console.log("deposit");
                                  
                                })
                            }, "Deposit"), React.createElement("button", {
                              className: "mt-3 w-full inline-flex justify-center border-b-2 border border-black shadow-sm px-4 py-2 bg-white text-base font-large text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-2 sm:w-auto sm:text-2xl rounded",
                              onClick: (function (param) {
                                  console.log("Withdraw");
                                  
                                })
                            }, "Withdraw"), React.createElement("button", {
                              className: "mt-3 w-full inline-flex justify-center border-b-2 border border-black shadow-sm px-11 py-2 bg-white text-base font-large text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-2 sm:w-auto sm:text-2xl rounded",
                              onClick: (function (param) {
                                  console.log("Send");
                                  
                                })
                            }, "Send"))), React.createElement("div", {
                      className: "m-1 text-center"
                    }, React.createElement(Heading$FlowsUserApp.make, {
                          children: "Token Balances"
                        }), React.createElement("div", {
                          className: "mb-2"
                        }, React.createElement("p", undefined, "TTT: 123")))), React.createElement("div", {
                  className: "mt-2 border-gray-500 border-2 rounded-lg"
                }, React.createElement("div", {
                      className: "m-2 grid grid-cols-"
                    }, React.createElement(Heading$FlowsUserApp.make, {
                          children: "Streams"
                        }), React.createElement(StreamsTable$FlowsUserApp.make, {}))), React.createElement("div", {
                  className: "mt-2 border-gray-500 border-2 rounded-lg"
                }, React.createElement("div", {
                      className: "m-2 grid grid-cols-"
                    }, React.createElement(Heading$FlowsUserApp.make, {
                          children: "Payment History"
                        }), React.createElement(PaymentHistoryTable$FlowsUserApp.make, {}))));
}

var make = Dashboard;

export {
  make ,
  
}
/* react Not a pure module */
