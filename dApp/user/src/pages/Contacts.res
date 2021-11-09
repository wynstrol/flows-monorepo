@react.component
let make = () => {
  let (addContact, setAddContact) = React.useState(_ => false)
  <div className="container max-w-3xl mx-auto">
    {addContact ? <AddContact openModal={setAddContact} /> : React.null}
    <div className="border-gray-500 border-2 rounded-lg">
      <div className="m-2 flex justify-between">
        <Heading> {"Contacts"->React.string} </Heading>
        <button
          onClick={_ => setAddContact(_ => true)}
          className="mt-3 w-full inline-flex justify-center border-b-2 border border-black shadow-sm px-4 py-2 bg-white text-base font-large text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-lg rounded">
          {"Add contact"->React.string}
        </button>
      </div>
      <ContactsTable />
    </div>
  </div>
}
