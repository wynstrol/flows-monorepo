@react.component
let make = () => {
  <div className="container max-w-3xl mx-auto">
    <div className="border-gray-500 border-2 rounded-lg">
      <div className="mt-2 -mb-1"> <Heading> {"Raiden Node"->React.string} </Heading> </div>
      <div className="text-center text-sm text-gray-500">
        {"0x2D5ED5dc97adC88bBDf69814B90F64a4C5495D81"->React.string}
      </div>
      <div className="m-1 grid grid-cols-1 gap-4 md:grid-cols-1">
        <div className="text-center">
          //<HeadingVarient> {""->React.string} </HeadingVarient>
          <button
          //onClick={_ => Js.log("deposit")}
            onClick={_ =>
              Js.log2(
                "test ",
                Ethers.Utils.parseEtherUnsafe(~amount="0.1")->Ethers.BigNumber.toString,
              )}
            //onClick={_ => Js.log2("test ", 2.0 ** 1000000000000000.0)}
            className="mt-3 w-full inline-flex justify-center border-b-2 border border-black shadow-sm px-6 py-2 bg-white text-base font-large text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-2xl rounded">
            {"Deposit"->React.string}
          </button>
          <button
            onClick={_ => Js.log("Withdraw")}
            className="mt-3 w-full inline-flex justify-center border-b-2 border border-black shadow-sm px-4 py-2 bg-white text-base font-large text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-2 sm:w-auto sm:text-2xl rounded">
            {"Withdraw"->React.string}
          </button>
          <button
            onClick={_ => Js.log("Send")}
            className="mt-3 w-full inline-flex justify-center border-b-2 border border-black shadow-sm px-11 py-2 bg-white text-base font-large text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-2 sm:w-auto sm:text-2xl rounded">
            {"Send"->React.string}
          </button>
        </div>
      </div>
      <div className="m-1 text-center">
        <Heading> {"Token Balances"->React.string} </Heading>
        <div className="mb-2"> <p> {"TTT: 123"->React.string} </p> </div>
      </div>
    </div>
    <div className="mt-2 border-gray-500 border-2 rounded-lg">
      <div className="m-2 grid grid-cols-">
        <Heading> {"Streams"->React.string} </Heading>
        <div className="-mt-2"> <StreamsTable /> </div>
      </div>
    </div>
    <div className="mt-2 border-gray-500 border-2 rounded-lg">
      <div className="m-2 grid grid-cols-">
        <Heading> {"Payment History"->React.string} </Heading>
        <div className="-mt-2"> <PaymentHistoryTable /> </div>
      </div>
    </div>
  </div>
}
