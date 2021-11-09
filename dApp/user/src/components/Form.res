@react.component
let make = (~className, ~onSubmit, ~children) => {
  <form
    className
    onSubmit={event => {
      if !(event->ReactEvent.Form.defaultPrevented) {
        event->ReactEvent.Form.preventDefault
      }
      onSubmit()
      Js.log("submit 1")
    }}>
    children
  </form>
}

module Input = {
  @react.component
  let make = (~label, ~title, ~value, ~blur, ~updateCurried, ~result, ~disabled) => {
    <div className="flex flex-col w-full">
      <label htmlFor={label}> {title->React.string} </label>
      <input
        className="border py-2 px-3 text-black w-full rounded border-black bg-white hover:bg-black hover:text-white"
        id={label}
        type_="text"
        value={value}
        disabled={disabled}
        onBlur={_ => blur()}
        onChange={event => updateCurried((event->ReactEvent.Form.target)["value"])}
      />
      {switch result {
      | Some(Error(message)) => <div> {message->React.string} </div>
      | _ => React.null
      }}
    </div>
  }
}
