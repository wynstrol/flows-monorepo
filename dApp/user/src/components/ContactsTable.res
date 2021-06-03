module Contacts = {
  @react.component
  let make = (
    ~contactsQuery: ApolloClient__React_Hooks_UseQuery.QueryResult.t<
      FlowsUserApp.Queries.ViewUsers.ViewUsers_inner.t,
      FlowsUserApp.Queries.ViewUsers.ViewUsers_inner.Raw.t,
      FlowsUserApp.Queries.ViewUsers.ViewUsers_inner.t_variables,
      FlowsUserApp.Queries.ViewUsers.ViewUsers_inner.Raw.t_variables,
    >,
  ) => {
    switch contactsQuery {
        | {loading: true, data: None} => <p> {"Loading"->React.string} </p>
        | {error: Some(error)} =>
          Js.log(error)
          <p> {"Data is loaded"->React.string} </p>
        | {data: Some({user})} =>
          <table id="user">
            <tbody>
              {user
              ->Array.map(contact => {
                <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        src={Blockies.makeBlockie(contact.ethAddress)}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {contact.name->React.string}
                      </div>
                      <div className="text-sm text-gray-500">
                        {contact.ethAddress->React.string}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {"None"->React.string}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    {"Edit"->React.string}
                  </a>
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
  let contactsQuery = Queries.ViewUsers.use()

  <div className="flex flex-col">
    <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {"Name"->React.string}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {"Description"->React.string}
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only"> {"Edit"->React.string} </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <Contacts contactsQuery />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}