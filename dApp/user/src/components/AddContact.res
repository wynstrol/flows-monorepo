module AddContact = %form(
  type input = {address: string, name: string, description: string}
  type output = {address: string, name: string, description: string}

  let validators = {
    address: {
      strategy: OnFirstBlur,
      validate: ({address}) => {
        switch address {
        | "" => Error("Address is required")
        | address =>
          Ethers.Utils.getAddress(address)->Option.mapWithDefault(
            Error("Couldn't parse address"),
            address => address->Ethers.Utils.ethAdrToStr->Ok,
          )
        }
      },
    },
    name: {
      strategy: OnFirstBlur,
      validate: ({name}) =>
        if name == "" {
          Error("Name is required")
        } else {
          name->Ok
        },
    },
    description: {
      strategy: OnFirstBlur,
      validate: ({description}) => description->Ok,
    },
  }
)

let initialInput: AddContact.input = {
  address: "",
  name: "",
  description: "",
}

@react.component
let make = (~openModal) => {
  let (addUser, _addUserResult) = Queries.AddUser.use()
  let form = AddContact.useForm(~initialInput, ~onSubmit=({address, name, description}, _) => {
    let _ = addUser({
      address: address,
      name: name,
      description: description,
    })->JsPromise.map(_addUserResult =>
      switch _addUserResult {
      | Ok(_result) =>
        Js.log2("success?", _result)
        openModal(_ => false)
      //ReasonReactRouter.push("/contacts")
      //ReasonReactRouter.
      | Error(error) => Js.log2("fail?", error)
      }
    )
  })

  <div
    className="fixed z-10 inset-0 overflow-y-auto"
    ariaLabelledby="modal-title"
    role="dialog"
    ariaModal=true>
    <div
      className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ariaHidden=true />
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" ariaHidden=true>
        {""->React.string}
      </span>
      <div
        className="inline-block align-bottom bg-white border-gray-500 border-2 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <button
            onClick={_ => openModal(_ => false)}
            className="flex justify-end mt-3 w-full inline-flex justify-right shadow-sm px-4 py-2 bg-white text-base hover:bg-gray-50 focus:outline-none sm:mt-0">
            <img src="/img/icons/cancel.svg" className="h-4" />
          </button>
          <div className="sm:flex flex-col sm:items-center">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-3xl font-bold text-center" id="modal-title">
                {"Add contact"->React.string}
              </h3>
              <div className="mt-2">
                <p className="text-base text-black">
                  <Form className="" onSubmit={() => form.submit()}>
                    <Form.Input
                      label="address"
                      title="Raiden Address"
                      value={form.input.address}
                      disabled={form.submitting}
                      blur={form.blurAddress}
                      updateCurried={form.updateAddress((input, value) => {
                        ...input,
                        address: value,
                      })}
                      result={form.addressResult}
                    />
                    <Form.Input
                      label="name"
                      title="Name"
                      value={form.input.name}
                      disabled={form.submitting}
                      blur={form.blurName}
                      updateCurried={form.updateName((input, value) => {
                        ...input,
                        name: value,
                      })}
                      result={form.nameResult}
                    />
                    <Form.Input
                      label="description"
                      title="Description"
                      value={form.input.description}
                      disabled={form.submitting}
                      blur={form.blurDescription}
                      updateCurried={form.updateDescription((input, value) => {
                        ...input,
                        description: value,
                      })}
                      result={form.descriptionResult}
                    />
                    <div className="-mb-4 mt-1 text-center py-3">
                      <button
                        className="mt-3 w-full inline-flex justify-center border-b-2 border border-black shadow-sm px-4 py-2 bg-white text-base font-large text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-lg rounded">
                        {"Add contact"->React.string}
                      </button>
                    </div>
                  </Form>
                </p>
              </div>
            </div>
          </div>
        </div>
        // <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        //   <button
        //     onClick={_ => openModal(_ => false)}
        //     className="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
        //     {"Save"->React.string}
        //   </button>
        //   <button
        //     onClick={_ => openModal(_ => false)}
        //     className="mt-3 w-full inline-flex justify-center border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
        //     {"Cancel"->React.string}
        //   </button>
        // </div>
      </div>
    </div>
  </div>
}
