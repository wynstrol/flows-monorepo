// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

function Form(Props) {
  var className = Props.className;
  var onSubmit = Props.onSubmit;
  var children = Props.children;
  return React.createElement("form", {
              className: className,
              onSubmit: (function ($$event) {
                  if (!$$event.defaultPrevented) {
                    $$event.preventDefault();
                  }
                  Curry._1(onSubmit, undefined);
                  console.log("submit 1");
                  
                })
            }, children);
}

function Form$Input(Props) {
  var label = Props.label;
  var title = Props.title;
  var value = Props.value;
  var blur = Props.blur;
  var updateCurried = Props.updateCurried;
  var result = Props.result;
  var disabled = Props.disabled;
  var tmp;
  tmp = result !== undefined && result.TAG !== /* Ok */0 ? React.createElement("div", undefined, result._0) : null;
  return React.createElement("div", {
              className: "flex flex-col w-full"
            }, React.createElement("label", {
                  htmlFor: label
                }, title), React.createElement("input", {
                  className: "border py-2 px-3 text-black w-full rounded border-black bg-white hover:bg-black hover:text-white",
                  id: label,
                  disabled: disabled,
                  type: "text",
                  value: value,
                  onBlur: (function (param) {
                      return Curry._1(blur, undefined);
                    }),
                  onChange: (function ($$event) {
                      return Curry._1(updateCurried, $$event.target.value);
                    })
                }), tmp);
}

var Input = {
  make: Form$Input
};

function Form$DateTimeInput(Props) {
  var label = Props.label;
  var title = Props.title;
  var value = Props.value;
  var blur = Props.blur;
  var updateCurried = Props.updateCurried;
  var result = Props.result;
  var disabled = Props.disabled;
  var tmp;
  tmp = result !== undefined && result.TAG !== /* Ok */0 ? React.createElement("div", undefined, result._0) : null;
  return React.createElement("div", {
              className: "flex flex-col w-full"
            }, React.createElement("label", {
                  htmlFor: label
                }, title), React.createElement("input", {
                  className: "border py-2 px-3 text-black w-full rounded border-black bg-white hover:bg-black hover:text-white",
                  id: label,
                  disabled: disabled,
                  type: "datetime-local",
                  value: value,
                  onBlur: (function (param) {
                      return Curry._1(blur, undefined);
                    }),
                  onChange: (function ($$event) {
                      return Curry._1(updateCurried, $$event.target.value);
                    })
                }), tmp);
}

var DateTimeInput = {
  make: Form$DateTimeInput
};

var make = Form;

export {
  make ,
  Input ,
  DateTimeInput ,
  
}
/* react Not a pure module */
