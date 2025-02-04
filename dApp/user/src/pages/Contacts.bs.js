// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Heading$FlowsUserApp from "../components/Heading.bs.js";
import * as AddContact$FlowsUserApp from "../components/AddContact.bs.js";
import * as ContactsTable$FlowsUserApp from "../components/ContactsTable.bs.js";

function Contacts(Props) {
  var match = React.useState(function () {
        return false;
      });
  var setAddContact = match[1];
  return React.createElement("div", {
              className: "container max-w-3xl mx-auto"
            }, match[0] ? React.createElement(AddContact$FlowsUserApp.make, {
                    openModal: setAddContact
                  }) : null, React.createElement("div", {
                  className: "border-gray-500 border-2 rounded-lg"
                }, React.createElement("div", {
                      className: "m-2 -mb-4 flex justify-center"
                    }, React.createElement(Heading$FlowsUserApp.make, {
                          children: "Contacts"
                        })), React.createElement(ContactsTable$FlowsUserApp.make, {}), React.createElement("div", {
                      className: "m-3 -mt-2 flex justify-center"
                    }, React.createElement("button", {
                          className: "mt-3 w-full inline-flex justify-center border-b-2 border border-black shadow-sm px-4 py-2 bg-white text-base font-large text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-lg rounded",
                          onClick: (function (param) {
                              return Curry._1(setAddContact, (function (param) {
                                            return true;
                                          }));
                            })
                        }, "Add contact"))));
}

var make = Contacts;

export {
  make ,
  
}
/* react Not a pure module */
