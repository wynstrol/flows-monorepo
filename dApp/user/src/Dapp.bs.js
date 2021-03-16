// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as RaidenTs from "raiden-ts";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as SignUp$FlowsUserApp from "./components/Auth/SignUp.bs.js";
import * as AuthProvider$FlowsUserApp from "./lib/Auth/AuthProvider.bs.js";
import * as RootProvider$FlowsUserApp from "./lib/Old/RootProvider.bs.js";
import * as AuthenticateButton$FlowsUserApp from "./components/Auth/AuthenticateButton.bs.js";

function Dapp(Props) {
  var optWeb3Provider = RootProvider$FlowsUserApp.useWeb3(undefined);
  var optSigner = RootProvider$FlowsUserApp.useSigner(undefined);
  var match = AuthProvider$FlowsUserApp.useAuthStatus(undefined);
  var loggedInStatus = match.loggedInStatus;
  React.useEffect((function () {
          if (optWeb3Provider !== undefined && optSigner !== undefined) {
            RaidenTs.Raiden.create(Caml_option.valFromOption(optWeb3Provider), 0);
          }
          
        }), [
        optWeb3Provider,
        optSigner
      ]);
  var tmp;
  if (typeof loggedInStatus === "number") {
    switch (loggedInStatus) {
      case /* Web3AndDb */0 :
          tmp = React.createElement(SignUp$FlowsUserApp.make, {});
          break;
      case /* Web3Only */1 :
          tmp = React.createElement(AuthenticateButton$FlowsUserApp.make, {});
          break;
      case /* NotLoggedIn */2 :
          tmp = null;
          break;
      
    }
  } else {
    tmp = React.createElement(SignUp$FlowsUserApp.make, {});
  }
  return React.createElement("div", undefined, tmp, React.createElement("p", undefined, "something"));
}

var make = Dapp;

export {
  make ,
  
}
/* react Not a pure module */
