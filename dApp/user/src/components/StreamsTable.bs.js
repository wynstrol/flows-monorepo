// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import EthereumBlockiesBase64 from "ethereum-blockies-base64";
import * as DisplayAddress$FlowsUserApp from "./DisplayAddress.bs.js";

function StreamsTable(Props) {
  return React.createElement("div", {
              className: "flex flex-col"
            }, React.createElement("div", {
                  className: "my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
                }, React.createElement("div", {
                      className: "py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8"
                    }, React.createElement("div", {
                          className: "shadow overflow-hidden border-b border-gray-200"
                        }, React.createElement("table", {
                              className: "min-w-full divide-y divide-gray-200"
                            }, React.createElement("thead", {
                                  className: "bg-gray-50"
                                }, React.createElement("tr", undefined, React.createElement("th", {
                                          className: "px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                          scope: "col"
                                        }, "Receiver"), React.createElement("th", {
                                          className: "px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                          scope: "col"
                                        }, "Token"), React.createElement("th", {
                                          className: "px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                          scope: "col"
                                        }, "Amount"), React.createElement("th", {
                                          className: "px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                          scope: "col"
                                        }, "Progress"), React.createElement("th", {
                                          className: "px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                          scope: "col"
                                        }, "Auto", React.createElement("br", undefined), "renew"), React.createElement("th", {
                                          className: "relative px-2 py-3",
                                          scope: "col"
                                        }, React.createElement("span", {
                                              className: "sr-only"
                                            }, "Edit")), React.createElement("th", {
                                          className: "relative px-2 py-3",
                                          scope: "col"
                                        }, React.createElement("span", {
                                              className: "sr-only"
                                            }, "Delete")))), React.createElement("tbody", {
                                  className: "bg-white divide-y divide-gray-200"
                                }, React.createElement("tr", undefined, React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap"
                                        }, React.createElement("div", {
                                              className: "flex items-center"
                                            }, React.createElement("div", {
                                                  className: "flex-shrink-0 h-10 w-10"
                                                }, React.createElement("img", {
                                                      src: EthereumBlockiesBase64("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B")
                                                    })), React.createElement("div", {
                                                  className: "ml-4"
                                                }, React.createElement("div", {
                                                      className: "text-sm font-medium text-gray-900"
                                                    }, "Arthur Kambrook"), React.createElement("div", {
                                                      className: "text-sm text-gray-500"
                                                    }, React.createElement(DisplayAddress$FlowsUserApp.make, {
                                                          address: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"
                                                        }))))), React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap text-sm text-gray-500"
                                        }, "DAI"), React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap text-sm text-gray-500"
                                        }, "950"), React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap text-sm text-gray-500 w-full"
                                        }, React.createElement("div", {
                                              className: "relative pt-1 "
                                            }, React.createElement("div", {
                                                  className: "flex items-center overflow-hidden h-7 mb-4 text-xs text-white justify-between bg-blue-200"
                                                }, React.createElement("div", {
                                                      className: "shadow-none w-14 flex-row whitespace-nowrap  bg-blue-400 h-7 items-center"
                                                    }, React.createElement("p", undefined, "8th Apr 21")), React.createElement("p", undefined, "7th Apr 22")))), React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap text-sm text-gray-500"
                                        }, React.createElement("div", {
                                              className: ""
                                            }, React.createElement("input", {
                                                  className: "h-6 w-6",
                                                  checked: true,
                                                  type: "checkbox",
                                                  onChange: (function (param) {
                                                      console.log("Changed");
                                                      
                                                    })
                                                }))), React.createElement("td", {
                                          className: "py-4"
                                        }, React.createElement("div", {
                                              className: "ml-1"
                                            }, React.createElement("button", {
                                                  className: "mt-3 justify-center border border-gray-300 shadow-sm py-2 px-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-1 sm:w-auto",
                                                  onClick: (function (param) {
                                                      console.log("edit");
                                                      
                                                    })
                                                }, React.createElement("img", {
                                                      className: "h-4 w-4",
                                                      src: "/img/icons/edit.svg"
                                                    })))), React.createElement("td", {
                                          className: "py-4"
                                        }, React.createElement("div", {
                                              className: "mr-1"
                                            }, React.createElement("button", {
                                                  className: "mt-3 justify-center border border-gray-300 shadow-sm py-2 px-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-1 sm:w-auto",
                                                  onClick: (function (param) {
                                                      console.log("delete");
                                                      
                                                    })
                                                }, React.createElement("img", {
                                                      className: "h-4 w-4",
                                                      src: "/img/icons/delete.svg"
                                                    }))))), React.createElement("tr", undefined, React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap"
                                        }, React.createElement("div", {
                                              className: "flex items-center"
                                            }, React.createElement("div", {
                                                  className: "flex-shrink-0 h-10 w-10"
                                                }, React.createElement("img", {
                                                      src: EthereumBlockiesBase64("0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8")
                                                    })), React.createElement("div", {
                                                  className: "ml-4"
                                                }, React.createElement("div", {
                                                      className: "text-sm font-medium text-gray-900"
                                                    }, "Wello Horld"), React.createElement("div", {
                                                      className: "text-sm text-gray-500"
                                                    }, React.createElement(DisplayAddress$FlowsUserApp.make, {
                                                          address: "0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8"
                                                        }))))), React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap text-sm text-gray-500"
                                        }, "DAI"), React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap text-sm text-gray-500"
                                        }, "3050"), React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap text-sm text-gray-500 w-full"
                                        }, React.createElement("div", {
                                              className: "relative pt-1 "
                                            }, React.createElement("div", {
                                                  className: "flex items-center overflow-hidden h-7 mb-4 text-xs text-white justify-between bg-blue-200"
                                                }, React.createElement("div", {
                                                      className: "shadow-none w-10 flex-row whitespace-nowrap  bg-blue-400 h-7 items-center"
                                                    }, React.createElement("p", undefined, "2nd Feb 21")), React.createElement("p", undefined, "2nd Feb 21")))), React.createElement("td", {
                                          className: "px-2 py-4 whitespace-nowrap text-sm text-gray-500"
                                        }, React.createElement("div", {
                                              className: ""
                                            }, React.createElement("input", {
                                                  className: "h-6 w-6",
                                                  checked: true,
                                                  type: "checkbox",
                                                  onChange: (function (param) {
                                                      console.log("Changed");
                                                      
                                                    })
                                                }))), React.createElement("td", {
                                          className: "py-4"
                                        }, React.createElement("div", {
                                              className: "ml-1"
                                            }, React.createElement("button", {
                                                  className: "block mt-3 justify-center border border-gray-300 shadow-sm py-2 px-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-1 sm:w-auto",
                                                  onClick: (function (param) {
                                                      console.log("edit");
                                                      
                                                    })
                                                }, React.createElement("img", {
                                                      className: "h-4 w-4",
                                                      src: "/img/icons/edit.svg"
                                                    })))), React.createElement("td", {
                                          className: "py-4"
                                        }, React.createElement("div", {
                                              className: "mr-1"
                                            }, React.createElement("button", {
                                                  className: "mt-3 justify-center border border-gray-300 shadow-sm py-2 px-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-1 sm:w-auto",
                                                  onClick: (function (param) {
                                                      console.log("delete");
                                                      
                                                    })
                                                }, React.createElement("img", {
                                                      className: "h-4 w-4",
                                                      src: "/img/icons/delete.svg"
                                                    })))))))))));
}

var make = StreamsTable;

export {
  make ,
  
}
/* react Not a pure module */
