@react.component
let make = () => {
  <div className="container max-w-3xl mx-auto">
    <div className="grid grid-cols-1 gap-4  md:grid-cols-1">
      <div className="">
        //<HeadingVarient> {""->React.string} </HeadingVarient>
        <button
          onClick={_ => Js.log("deposit")}
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
    <div className="">
      <HeadingVarient> {"Token Balances"->React.string} </HeadingVarient>
      <p> {"TTT: 123 DAI: 1249 RDN: 9311"->React.string} </p>
    </div>
    <div className="grid grid-cols-">
      <Heading> {"Outgoing streams"->React.string} </Heading> <StreamsTableTemp />
    </div>
  </div>
}
