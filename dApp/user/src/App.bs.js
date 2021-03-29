// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Client from "@apollo/client";
import * as Nav$FlowsUserApp from "./components/Nav.bs.js";
import * as Dapp$FlowsUserApp from "./Dapp.bs.js";
import * as Login$FlowsUserApp from "./Login/Login.bs.js";
import * as Apollo$FlowsUserApp from "./Apollo.bs.js";
import * as Router$FlowsUserApp from "./Router.bs.js";
import * as Contacts$FlowsUserApp from "./pages/Contacts.bs.js";
import * as Dashboard$FlowsUserApp from "./pages/Dashboard.bs.js";
import * as ViewStreams$FlowsUserApp from "./ViewStreams.bs.js";
import * as AuthProvider$FlowsUserApp from "./lib/Auth/AuthProvider.bs.js";
import * as CreateStream$FlowsUserApp from "./pages/CreateStream.bs.js";
import * as RootProvider$FlowsUserApp from "./lib/Old/RootProvider.bs.js";

function App$OnlyLoggedIn(Props) {
  var children = Props.children;
  var optUsersAccount = RootProvider$FlowsUserApp.useCurrentUser(undefined);
  if (optUsersAccount !== undefined) {
    return children;
  } else {
    return React.createElement(Login$FlowsUserApp.make, {
                redirectOnLogin: false
              });
  }
}

var OnlyLoggedIn = {
  make: App$OnlyLoggedIn
};

function App$Main(Props) {
  var match = AuthProvider$FlowsUserApp.useAuthStatus(undefined);
  return React.createElement(React.Fragment, undefined, React.createElement("h3", undefined, "Auth Status"), React.createElement("div", undefined, AuthProvider$FlowsUserApp.loggedInStatusToStr(match.loggedInStatus)), React.createElement(App$OnlyLoggedIn, {
                  children: null
                }, React.createElement("h1", undefined, "Main component"), React.createElement(Dapp$FlowsUserApp.make, {})));
}

var Main = {
  make: App$Main
};

function App$Streams(Props) {
  return React.createElement(App$OnlyLoggedIn, {
              children: React.createElement(ViewStreams$FlowsUserApp.make, {})
            });
}

var Streams = {
  make: App$Streams
};

function App$NotFound(Props) {
  return React.createElement("h1", undefined, "Not Found - 404");
}

var NotFound = {
  make: App$NotFound
};

function App$Router(Props) {
  var route = Router$FlowsUserApp.useRouter(undefined);
  if (route === undefined) {
    return React.createElement(App$NotFound, {});
  }
  switch (route) {
    case /* Dashboard */0 :
        return React.createElement(App$OnlyLoggedIn, {
                    children: React.createElement(Dashboard$FlowsUserApp.make, {})
                  });
    case /* Stream */1 :
        return React.createElement(CreateStream$FlowsUserApp.make, {});
    case /* Contacts */2 :
        return React.createElement(Contacts$FlowsUserApp.make, {});
    case /* Login */3 :
        return React.createElement(Login$FlowsUserApp.make, {});
    case /* Dev */4 :
        return React.createElement(App$Main, {});
    
  }
}

var Router = {
  make: App$Router
};

function App$GraphQl(Props) {
  var children = Props.children;
  var optWeb3User = RootProvider$FlowsUserApp.useCurrentUser(undefined);
  var match = AuthProvider$FlowsUserApp.useAuthStatus(undefined);
  var loggedInStatus = match.loggedInStatus;
  var optDbOnlyUser = typeof loggedInStatus === "number" ? undefined : Caml_option.some(loggedInStatus._0);
  var optUser = Belt_Option.isSome(optWeb3User) ? optWeb3User : (
      Belt_Option.isSome(optDbOnlyUser) ? optDbOnlyUser : undefined
    );
  var client = React.useMemo((function () {
          return Apollo$FlowsUserApp.makeClient(optUser);
        }), [optUser]);
  return React.createElement(Client.ApolloProvider, {
              client: client,
              children: children
            });
}

var GraphQl = {
  make: App$GraphQl
};

function App(Props) {
  return React.createElement(RootProvider$FlowsUserApp.make, {
              children: React.createElement(AuthProvider$FlowsUserApp.make, {
                    children: React.createElement(App$GraphQl, {
                          children: null
                        }, React.createElement(Nav$FlowsUserApp.make, {}), React.createElement("div", {
                              className: "container mx-auto"
                            }, React.createElement(App$Router, {})))
                  })
            });
}

var make = App;

export {
  OnlyLoggedIn ,
  Main ,
  Streams ,
  NotFound ,
  Router ,
  GraphQl ,
  make ,
  
}
/* react Not a pure module */