@react.component
let make = () => {
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
                  {"Progress"->React.string}
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {"Auto"->React.string} <br /> {"renew"->React.string}
                </th>
                <th scope="col" className="relative px-5 py-4">
                  <span className="sr-only"> {"Edit"->React.string} </span>
                </th>
                <th scope="col" className="relative px-5 py-4">
                  <span className="sr-only"> {"Delete"->React.string} </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-black">
              <tr>
                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        src={Blockies.makeBlockie("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B")}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {"Arthur Kambrook"->React.string}
                      </div>
                      <div className="text-sm text-gray-500">
                        <DisplayAddress address="0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800">
                  {"DAI"->React.string}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800">
                  {"950"->React.string}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800 w-full">
                  <div className="relative pt-1 ">
                    <div
                      className="flex items-center overflow-hidden h-7 mb-2 text-xs text-white justify-between bg-gray-500">
                      <div
                        className="shadow-none w-14 flex-row whitespace-nowrap  bg-black h-7 items-right px-2 py-1.5">
                        <p> {"8th Apr 21"->React.string} </p>
                      </div>
                      <div className="px-2"> <p> {"7th Apr 22"->React.string} </p> </div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-0 whitespace-nowrap text-sm text-gray-500">
                  <div className="">
                    <input
                      className="h-5 w-5"
                      type_="checkbox"
                      checked={true}
                      onChange={_ => Js.log("Changed")}
                    />
                  </div>
                </td>
                <td className="py-4">
                  <div className="ml-1">
                    <button
                      onClick={_ => Js.log("edit")}
                      className="block mt-3 justify-center py-0 px-0 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-1">
                      <img src="/img/icons/edit.svg" className="h-7 w-7" />
                    </button>
                  </div>
                </td>
                <td className="py-4">
                  <div className="mr-2">
                    <button
                      onClick={_ => Js.log("delete")}
                      className="mt-3 justify-center py-1 px-0 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-1 sm:w-auto">
                      <img src="/img/icons/delete.svg" className="h-7 w-7" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        src={Blockies.makeBlockie("0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8")}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {"Wello Horld"->React.string}
                      </div>
                      <div className="text-sm text-gray-500">
                        <DisplayAddress address="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800">
                  {"DAI"->React.string}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800">
                  {"3050"->React.string}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 w-full">
                  <div className="relative pt-1 ">
                    <div
                      className="flex items-center overflow-hidden h-7 mb-2 text-xs text-white justify-between bg-gray-500">
                      <div
                        className="shadow-none w-3/12 flex-row whitespace-nowrap  bg-black h-7 items-center px-2 py-1.5">
                        <p> {"1st Feb 21"->React.string} </p>
                      </div>
                      <div className="px-2"> <p> {"2nd Feb 21"->React.string} </p> </div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-0 whitespace-nowrap text-sm text-gray-500">
                  <div className="">
                    <input
                      className="h-5 w-5"
                      type_="checkbox"
                      checked={true}
                      onChange={_ => Js.log("Changed")}
                    />
                  </div>
                </td>
                <td className="py-4">
                  <div className="ml-1">
                    <button
                      onClick={_ => Js.log("edit")}
                      className="block mt-3 justify-center py-0 px-0 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-1 sm:w-auto">
                      <img src="/img/icons/edit.svg" className="h-7 w-7" />
                    </button>
                  </div>
                </td>
                <td className="py-4">
                  <div className="mr-2">
                    <button
                      onClick={_ => Js.log("delete")}
                      className="mt-3 justify-center py-1 px-0 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-1 sm:w-auto">
                      <img src="/img/icons/delete.svg" className="h-7 w-7" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}
