open Ethers.Utils

let validateFloat = interval => {
  let intervalOpt = interval->Belt.Float.fromString

  switch intervalOpt {
  | Some(interval) => interval->Ok
  | None => Error("Please enter a valid float.")
  }
}

let validateInt = interval => {
  let intervalOpt = interval->Belt.Int.fromString

  switch intervalOpt {
  | Some(interval) => interval->Ok
  | None => Error("Please enter a valid integer.")
  }
}

let validateAddress = address => {
  switch address->getAddress {
  | Some(a) => a->ethAdrToStr->Ok
  | None => Error("Please enter a valid address.")
  }
}

module CreatePaymentStreamForm = %form(
  type input = {
    userAddress: string,
    amount: string,
    interval: string,
    numberOfPayments: string,
    tokenAddress: string,
    startPayment: string,
  }
  type output = {
    userAddress: string,
    amount: string,
    interval: int,
    numberOfPayments: int,
    tokenAddress: string,
    startPayment: int,
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
        //validateFloat(amount)
        if amount->Js.String.length > 0 {
          // do this properly at some stage
          amount->Ok
        } else {
          Error("Amount must have a length greater than zero!")
        }
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
    startPayment: {
      strategy: OnFirstBlur,
      validate: ({startPayment}) => {
        validateInt(startPayment)
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
  startPayment: "",
}

@react.component
let make = () => {
  let (createProfileMutate, _createProfileMutateResult) = Queries.CreatePaymentStream.use()
  /// $amount: String!, $interval: Int!, $numberOfPayments: Int!, $recipient: String!, $startPayment: Int!, $state: String, $tokenAddress: String!
  let form = CreatePaymentStreamForm.useForm(~initialInput, ~onSubmit=(
    {userAddress, amount, interval, numberOfPayments, tokenAddress, startPayment},
    _form,
  ) => {
    let _ = createProfileMutate({
      recipient: userAddress,
      amount: amount,
      interval: interval,
      numberOfPayments: numberOfPayments,
      tokenAddress: tokenAddress,
      startPayment: startPayment,
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
          recipient: "0xF58e6F5Fc36d26efFF6b4188A9F607C6FAc6737b",
          amount: "10",
          interval: 10,
          numberOfPayments: 10,
          tokenAddress: "0xC563388e2e2fdD422166eD5E76971D11eD37A466",
          startPayment: 1634834020,
        })->JsPromise.map(_createProfileMutateResult =>
          switch _createProfileMutateResult {
          | Ok(_result) => Js.log2("success?", _result)
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
        title={"Recipient "}
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
        title={"Amount "}
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
        title={"Interval "}
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
        title={"Number of payments"}
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
      <Form.Input
        label={"startPayment"}
        title={"Start Payment"}
        value={form.input.startPayment}
        disabled={form.submitting}
        blur={form.blurStartPayment}
        updateCurried={form.updateStartPayment((input, value) => {
          ...input,
          startPayment: value,
        })}
        result={form.startPaymentResult}
      />
      <br />
      <button
        className="mt-3 w-full inline-flex justify-center border border-black shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm rounded">
        {"CREATE STREAM"->React.string}
      </button>
    </Form>
    <br />
    <input
      type_="datetime-local"
      id="birthdaytime"
      className="border py-2 px-3 text-black w-full rounded border-black bg-white hover:bg-black hover:text-white"
    />
  </div>
}
