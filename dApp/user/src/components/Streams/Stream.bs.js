// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function Stream(Props) {
  return React.createElement("div", {
              className: " flex my-2 p-1 border-2 border-indigo-600 items-center justify-between"
            }, React.createElement("div", {
                  className: "flex flex-col"
                }, React.createElement("div", undefined, "To"), React.createElement("div", {
                      className: "text-lg"
                    }, "James")), React.createElement("div", {
                  className: "flex flex-col"
                }, React.createElement("div", undefined, "Token"), React.createElement("div", {
                      className: "text-lg"
                    }, "TTT")), React.createElement("div", {
                  className: "flex flex-col"
                }, React.createElement("div", undefined, "Amount"), React.createElement("div", {
                      className: "text-lg"
                    }, "3000")), React.createElement("div", {
                  className: "flex flex-row"
                }, React.createElement("div", undefined, "start date"), React.createElement("div", {
                      className: ""
                    }, "end date")), React.createElement("div", {
                  className: "flex flex-col"
                }, React.createElement("div", undefined, "Auto renew"), React.createElement("div", {
                      className: ""
                    }, React.createElement("input", {
                          checked: true,
                          type: "checkbox",
                          onChange: (function (param) {
                              console.log("Changed");
                              
                            })
                        }))), React.createElement("div", {
                  className: "flex flex-row"
                }, React.createElement("div", {
                      className: "border m-1 p-2 border-indigo-600"
                    }, React.createElement("img", {
                          className: "h-4",
                          src: "/img/icons/edit.svg"
                        })), React.createElement("div", {
                      className: "border m-1 p-2 border-indigo-600"
                    }, React.createElement("img", {
                          className: "h-4",
                          src: "/img/icons/delete.svg"
                        }))));
}

var make = Stream;

export {
  make ,
  
}
/* react Not a pure module */
