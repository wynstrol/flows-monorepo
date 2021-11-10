open Ethers.Utils

let getTimestamp = date => {
  (date->Js.Date.getTime /. 1000.0)->Int.fromFloat
}

let validateFloat = interval => {
  let intervalOpt = interval->Belt.Float.fromString

  switch intervalOpt {
  | Some(interval) => interval->Belt.Float.toString->Ok
  | None => Error("Please enter a valid float")
  }
}

let validateInt = interval => {
  let intervalOpt = interval->Belt.Int.fromString

  switch intervalOpt {
  | Some(interval) => interval->Ok
  | None => Error("Please enter a valid integer")
  }
}

let validateAddress = address => {
  switch address->getAddress {
  | Some(a) => a->ethAdrToStr->Ok
  | None => Error("Please enter a valid address")
  }
}

module CreatePaymentStreamForm = %form(
  type input = {
    userAddress: string,
    amount: string,
    interval: string,
    numberOfPayments: string,
    tokenAddress: string,
    startTime: string,
  }
  type output = {
    userAddress: string,
    amount: string,
    interval: int,
    numberOfPayments: int,
    tokenAddress: string,
    startTime: string,
  }
  let validators = {
    userAddress: {
      strategy: OnFirstBlur,
      validate: ({userAddress}) => {
        validateAddress(userAddress)
      },
    },
    amount: {
      strategy: OnFirstBlur,
      validate: ({amount}) => {
        validateFloat(amount)
        /* if amount->Js.String.length > 0 {
          // do this properly at some stage
          amount->Ok
        } else {
          Error("Please enter a valid amount")
        }*/
      },
    },
    interval: {
      strategy: OnFirstBlur,
      validate: ({interval}) => {
        validateInt(interval)
      },
    },
    numberOfPayments: {
      strategy: OnFirstBlur,
      validate: ({numberOfPayments}) => {
        validateInt(numberOfPayments)
      },
    },
    tokenAddress: {
      strategy: OnFirstBlur,
      validate: ({tokenAddress}) => {
        validateAddress(tokenAddress)
      },
    },
    startTime: {
      strategy: OnFirstBlur,
      validate: ({startTime}) => {
        if startTime->Js.String.length > 0 {
          // do this properly at some stage
          startTime->Ok
        } else {
          Error("Please enter a valid starting time")
        }
      },
    },
  }
)

let initialInput: CreatePaymentStreamForm.input = {
  userAddress: "",
  amount: "",
  interval: "",
  numberOfPayments: "",
  tokenAddress: "",
  startTime: "",
}

@react.component
let make = () => {
  let (createProfileMutate, _createProfileMutateResult) = Queries.CreatePaymentStream.use()

  let form = CreatePaymentStreamForm.useForm(~initialInput, ~onSubmit=(
    {userAddress, amount, interval, numberOfPayments, tokenAddress, startTime},
    _form,
  ) => {
    let _ = createProfileMutate({
      recipient: userAddress,
      amount: Ethers.Utils.parseEtherUnsafe(~amount)->Ethers.BigNumber.toString,
      interval: interval,
      numberOfPayments: numberOfPayments,
      tokenAddress: tokenAddress,
      startPayment: Js.Date.fromString(startTime)->getTimestamp,
    })->JsPromise.map(_createProfileMutateResult =>
      switch _createProfileMutateResult {
      | Ok(_result) => {
          Js.log2("success?", _result)
          ReasonReactRouter.push("/")
        }
      | Error(error) => Js.log2("fail?", error)
      }
    )
  })
  <div className="border-2 border-gray-500 p-3 container max-w-3xl mx-auto rounded-lg">
    /* <button
      className="mt-3 w-full inline-flex justify-center border border-black shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm rounded"
      onClick={_ => {
        let _ = createProfileMutate({
          recipient: "0xc9531d11156f5992A5c6B821D81513CfB7d0488b",
          amount: "10",
          interval: 10,
          numberOfPayments: 10,
          tokenAddress: "0xC563388e2e2fdD422166eD5E76971D11eD37A466",
          startPayment: Js.Date.fromString("2021-11-17T08:08")->getTimestamp,
        })->JsPromise.map(_createProfileMutateResult =>
          switch _createProfileMutateResult {
          | Ok(_result) =>
            Js.log2("success?", _result)
            ReasonReactRouter.push("/")
          | Error(error) => Js.log2("fail?", error)
          }
        )
      }}>
      {"CREATE STREAM"->React.string}
    </button>*/
    <Form className="" onSubmit={_ => form.submit()}>
      <Heading> {"Create Stream"->React.string} </Heading>
      <Form.Input
        label={"address"}
        title={"Recipient"}
        value={form.input.userAddress}
        disabled={form.submitting}
        blur={form.blurUserAddress}
        updateCurried={form.updateUserAddress((input, value) => {
          ...input,
          userAddress: value,
        })}
        result={form.userAddressResult}
      />
      <br />
      <Form.Input
        label={"amount"}
        title={"Amount"}
        value={form.input.amount}
        disabled={form.submitting}
        blur={form.blurAmount}
        updateCurried={form.updateAmount((input, value) => {
          ...input,
          amount: value,
        })}
        result={form.amountResult}
      />
      <br />
      <Form.Input
        label={"interval"}
        title={"Interval (Minutes)"}
        value={form.input.interval}
        disabled={form.submitting}
        blur={form.blurInterval}
        updateCurried={form.updateInterval((input, value) => {
          ...input,
          interval: value,
        })}
        result={form.intervalResult}
      />
      <br />
      <Form.Input
        label={"numberPayments"}
        title={"Number of Payments"}
        value={form.input.numberOfPayments}
        disabled={form.submitting}
        blur={form.blurNumberOfPayments}
        updateCurried={form.updateNumberOfPayments((input, value) => {
          ...input,
          numberOfPayments: value,
        })}
        result={form.numberOfPaymentsResult}
      />
      <br />
      <Form.Input
        label={"tokenAddress"}
        title={"Token Address"}
        value={form.input.tokenAddress}
        disabled={form.submitting}
        blur={form.blurTokenAddress}
        updateCurried={form.updateTokenAddress((input, value) => {
          ...input,
          tokenAddress: value,
        })}
        result={form.tokenAddressResult}
      />
      <br />
      <Form.DateTimeInput
        label={"datetime"}
        title={"Start Time"}
        value={form.input.startTime}
        disabled={form.submitting}
        blur={form.blurStartTime}
        updateCurried={form.updateStartTime((input, value) => {
          ...input,
          startTime: value,
        })}
        result={form.startTimeResult}
      />
      <br />
      <div className="-mt-2 text-center">
        <button
        //className="mt-3 w-full inline-flex justify-center border border-black shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm rounded">
          className="mt-3 w-full inline-flex justify-center border-b-2 border border-black shadow-sm px-4 py-2 bg-white text-base font-large text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-lg rounded">
          {"Create Stream"->React.string}
        </button>
      </div>
    </Form>
    /* <input
      type_="datetime-local"
      id="birthdaytime"
      className="border py-2 px-3 text-black w-full rounded border-black bg-white hover:bg-black hover:text-white"
    />*/
  </div>
}
