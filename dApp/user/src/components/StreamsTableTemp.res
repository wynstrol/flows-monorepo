let fromTimeStampToDate = timestamp => {
  (timestamp->Float.fromInt *. 1000.0)->Js.Date.fromFloat->Js.Date.toDateString
}

let fromTimeStampToTime = timestamp => {
  (timestamp->Float.fromInt *. 1000.0)->Js.Date.fromFloat->Js.Date.toLocaleTimeString
}

module Streams = {
  @react.component
  let make = (
    ~streamsQuery: ApolloClient__React_Hooks_UseQuery.QueryResult.t<
      FlowsUserApp.Queries.ViewPaymentsStreams.ViewPaymentsStreams_inner.t,
      FlowsUserApp.Queries.ViewPaymentsStreams.ViewPaymentsStreams_inner.Raw.t,
      FlowsUserApp.Queries.ViewPaymentsStreams.ViewPaymentsStreams_inner.t_variables,
      FlowsUserApp.Queries.ViewPaymentsStreams.ViewPaymentsStreams_inner.Raw.t_variables,
    >,
  ) => {
    switch streamsQuery {
    | {loading: true, data: None} => <p> {"Loading"->React.string} </p>
    | {error: Some(error)} =>
      Js.log(error)
      <p> {"Data is loaded"->React.string} </p>
    | {data: Some({streams})} =>
      <table id="streams">
        <tbody>
          {streams
          ->Array.map(stream => {
            <tr>
              <td className="px-2 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img src={Blockies.makeBlockie(stream.recipient)} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {"Wynstrol"->React.string}
                    </div>
                    <div className="text-sm text-gray-500">
                      <DisplayAddress address=stream.recipient />
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800">
                {"RDN"->React.string}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800">
                {stream.amount->BN.toString->React.string}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {stream.nextPayment->BN.toNumber->fromTimeStampToDate->React.string}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {stream.nextPayment->BN.toNumber->fromTimeStampToTime->React.string}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {stream.lastPayment->fromTimeStampToDate->React.string}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {stream.lastPayment->fromTimeStampToTime->React.string}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          })
          ->React.array}
        </tbody>
      </table>
    | {loading: false, data: None} => <p> {"Error loading data"->React.string} </p>
    }
  }
}

@react.component
let make = () => {
  let streamsQuery = Queries.ViewPaymentsStreams.use({
    {state: "OPEN"}
  })

  <div className="flex flex-col">
    <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8">
        <div className="shadow overflow-hidden border border-black rounded">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-black">
              <tr>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {"Receiver"->React.string}
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {"Token"->React.string}
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {"Amount"->React.string}
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {"Next Payment"->React.string}
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {"Last Payment"->React.string}
                </th>
                <th scope="col" className="relative px-5 py-4">
                  <span className="sr-only"> {"Edit"->React.string} </span>
                </th>
                <th scope="col" className="relative px-5 py-4">
                  <span className="sr-only"> {"Delete"->React.string} </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-black"> <Streams streamsQuery /> </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}
