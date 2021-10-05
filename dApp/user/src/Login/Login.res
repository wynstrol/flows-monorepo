type connectorObj = {
  name: string,
  connector: Web3Connectors.injectedType,
  img: string,
  connectionPhrase: string,
}

@module("./connectors")
external connectors: Js.Array.t<connectorObj> = "default"

@react.component
let make = (~redirectOnLogin=true) => {
  let (_connectionStatus, activateConnector) = RootProvider.useActivateConnector()

  let nextPath = Some("/") // In the future this can be a login redirect
  let optCurrentUser = RootProvider.useCurrentUser()
  Js.log(("cunnert User", optCurrentUser))

  React.useEffect2(() => {
    switch (nextPath, optCurrentUser) {
    | (Some(nextPath), Some(_currentUser)) =>
      if redirectOnLogin {
        ReasonReactRouter.push(nextPath)
      }
    | _ => ()
    }
    None
  }, (nextPath, optCurrentUser))

  <div>
    <p>
      {"Use one of the wallet providers below. "->React.string}
      <small>
        {"(Not sure where to go from here? "->React.string}
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <span>
            {"TODO: put a guide in the blog or something that users can read on if they are confused"->React.string}
          </span>
        </a>
        {")"->React.string}
      </small>
    </p>
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      {connectors
      ->Array.mapWithIndex((index, connector) =>
        <div
          className="px-2 border-b-4 border-2 border-black bg-white rounded hover:bg-gray-400"
          key={index->string_of_int}
          onClick={e => {
            ReactEvent.Mouse.stopPropagation(e)
            activateConnector(connector.connector)
          }}
          >
          <div
            className={
              open CssJs
              style(.[
                margin(px(8)),
                display(#flex),
                justifyContent(#center),
                alignItems(#center),
                flexDirection(column),
                cursor(#pointer),
                borderRadius(px(12)),
                transition(~duration=200, ~delay=0, ~timingFunction=easeInOut, "background-color"),
              ])
            }>
            <div
              className={
                open Css
                style(list{width(px(70)), height(px(70))})
              }>
              <img
                src=connector.img
                alt=connector.name
                className={
                  open Css
                  style(list{width(#percent(100.)), height(#percent(100.))})
                }
              />
            </div>
            <div
              className="text-2xl text-black font-bold">
              {connector.name->React.string}
            </div>
            <div
              className="font-large text-black justify-center text-center">
              {connector.connectionPhrase->React.string}
            </div>
          </div>
        </div>
      )
      ->React.array}
    </div>
  </div>
}
