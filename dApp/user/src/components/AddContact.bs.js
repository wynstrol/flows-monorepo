// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Formality from "re-formality/src/Formality.bs.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Form$FlowsUserApp from "./Form.bs.js";
import * as Ethers$FlowsUserApp from "../lib/Ethers/Ethers.bs.js";
import * as Queries$FlowsUserApp from "../Queries.bs.js";
import * as Formality__ReactUpdate from "re-formality/src/Formality__ReactUpdate.bs.js";

var validators_description = {
  strategy: /* OnFirstBlur */0,
  validate: (function (param) {
      return {
              TAG: /* Ok */0,
              _0: param.description
            };
    })
};

var validators_name = {
  strategy: /* OnFirstBlur */0,
  validate: (function (param) {
      var name = param.name;
      if (name === "") {
        return {
                TAG: /* Error */1,
                _0: "Name is required"
              };
      } else {
        return {
                TAG: /* Ok */0,
                _0: name
              };
      }
    })
};

var validators_address = {
  strategy: /* OnFirstBlur */0,
  validate: (function (param) {
      var address = param.address;
      if (address === "") {
        return {
                TAG: /* Error */1,
                _0: "Address is required"
              };
      } else {
        return Belt_Option.mapWithDefault(Ethers$FlowsUserApp.Utils.getAddress(address), {
                    TAG: /* Error */1,
                    _0: "Couldn't parse address"
                  }, (function (address) {
                      return {
                              TAG: /* Ok */0,
                              _0: Ethers$FlowsUserApp.Utils.ethAdrToStr(address)
                            };
                    }));
      }
    })
};

var validators = {
  description: validators_description,
  name: validators_name,
  address: validators_address
};

function initialFieldsStatuses(_input) {
  return {
          description: /* Pristine */0,
          name: /* Pristine */0,
          address: /* Pristine */0
        };
}

function initialState(input) {
  return {
          input: input,
          fieldsStatuses: {
            description: /* Pristine */0,
            name: /* Pristine */0,
            address: /* Pristine */0
          },
          collectionsStatuses: undefined,
          formStatus: /* Editing */0,
          submissionStatus: /* NeverSubmitted */0
        };
}

function validateForm(input, validators, fieldsStatuses) {
  var match = fieldsStatuses.description;
  var match_0 = match ? match._0 : Curry._1(validators.description.validate, input);
  var match$1 = fieldsStatuses.name;
  var match_0$1 = match$1 ? match$1._0 : Curry._1(validators.name.validate, input);
  var match$2 = fieldsStatuses.address;
  var match_0$2 = match$2 ? match$2._0 : Curry._1(validators.address.validate, input);
  var descriptionResult = match_0;
  var descriptionResult$1;
  if (descriptionResult.TAG === /* Ok */0) {
    var nameResult = match_0$1;
    if (nameResult.TAG === /* Ok */0) {
      var addressResult = match_0$2;
      if (addressResult.TAG === /* Ok */0) {
        return {
                TAG: /* Valid */0,
                output: {
                  address: addressResult._0,
                  name: nameResult._0,
                  description: descriptionResult._0
                },
                fieldsStatuses: {
                  description: /* Dirty */{
                    _0: descriptionResult,
                    _1: /* Shown */0
                  },
                  name: /* Dirty */{
                    _0: nameResult,
                    _1: /* Shown */0
                  },
                  address: /* Dirty */{
                    _0: addressResult,
                    _1: /* Shown */0
                  }
                },
                collectionsStatuses: undefined
              };
      }
      descriptionResult$1 = descriptionResult;
    } else {
      descriptionResult$1 = descriptionResult;
    }
  } else {
    descriptionResult$1 = descriptionResult;
  }
  return {
          TAG: /* Invalid */1,
          fieldsStatuses: {
            description: /* Dirty */{
              _0: descriptionResult$1,
              _1: /* Shown */0
            },
            name: /* Dirty */{
              _0: match_0$1,
              _1: /* Shown */0
            },
            address: /* Dirty */{
              _0: match_0$2,
              _1: /* Shown */0
            }
          },
          collectionsStatuses: undefined
        };
}

function useForm(initialInput, onSubmit) {
  var memoizedInitialState = React.useMemo((function () {
          return initialState(initialInput);
        }), [initialInput]);
  var match = Formality__ReactUpdate.useReducer(memoizedInitialState, (function (state, action) {
          if (typeof action === "number") {
            switch (action) {
              case /* BlurDescriptionField */0 :
                  var result = Formality.validateFieldOnBlurWithValidator(state.input, state.fieldsStatuses.description, validators_description, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  description: status,
                                  name: init.name,
                                  address: init.address
                                };
                        }));
                  if (result !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: result,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: state.formStatus,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              case /* BlurNameField */1 :
                  var result$1 = Formality.validateFieldOnBlurWithValidator(state.input, state.fieldsStatuses.name, validators_name, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  description: init.description,
                                  name: status,
                                  address: init.address
                                };
                        }));
                  if (result$1 !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: result$1,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: state.formStatus,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              case /* BlurAddressField */2 :
                  var result$2 = Formality.validateFieldOnBlurWithValidator(state.input, state.fieldsStatuses.address, validators_address, (function (status) {
                          var init = state.fieldsStatuses;
                          return {
                                  description: init.description,
                                  name: init.name,
                                  address: status
                                };
                        }));
                  if (result$2 !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: result$2,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: state.formStatus,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              case /* Submit */3 :
                  var match = state.formStatus;
                  if (typeof match !== "number" && match.TAG === /* Submitting */0) {
                    return /* NoUpdate */0;
                  }
                  var match$1 = validateForm(state.input, validators, state.fieldsStatuses);
                  if (match$1.TAG !== /* Valid */0) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: match$1.fieldsStatuses,
                              collectionsStatuses: match$1.collectionsStatuses,
                              formStatus: /* Editing */0,
                              submissionStatus: /* AttemptedToSubmit */1
                            }
                          };
                  }
                  var output = match$1.output;
                  var error = state.formStatus;
                  var tmp;
                  tmp = typeof error === "number" || error.TAG !== /* SubmissionFailed */1 ? undefined : Caml_option.some(error._0);
                  return {
                          TAG: /* UpdateWithSideEffects */1,
                          _0: {
                            input: state.input,
                            fieldsStatuses: match$1.fieldsStatuses,
                            collectionsStatuses: match$1.collectionsStatuses,
                            formStatus: {
                              TAG: /* Submitting */0,
                              _0: tmp
                            },
                            submissionStatus: /* AttemptedToSubmit */1
                          },
                          _1: (function (param) {
                              var dispatch = param.dispatch;
                              return Curry._2(onSubmit, output, {
                                          notifyOnSuccess: (function (input) {
                                              return Curry._1(dispatch, {
                                                          TAG: /* SetSubmittedStatus */3,
                                                          _0: input
                                                        });
                                            }),
                                          notifyOnFailure: (function (error) {
                                              return Curry._1(dispatch, {
                                                          TAG: /* SetSubmissionFailedStatus */4,
                                                          _0: error
                                                        });
                                            }),
                                          reset: (function (param) {
                                              return Curry._1(dispatch, /* Reset */6);
                                            }),
                                          dismissSubmissionResult: (function (param) {
                                              return Curry._1(dispatch, /* DismissSubmissionResult */5);
                                            })
                                        });
                            })
                        };
                  break;
              case /* DismissSubmissionError */4 :
                  var match$2 = state.formStatus;
                  if (typeof match$2 === "number" || match$2.TAG !== /* SubmissionFailed */1) {
                    return /* NoUpdate */0;
                  } else {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: state.fieldsStatuses,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: /* Editing */0,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  }
              case /* DismissSubmissionResult */5 :
                  var match$3 = state.formStatus;
                  if (typeof match$3 === "number") {
                    if (match$3 === /* Editing */0) {
                      return /* NoUpdate */0;
                    }
                    
                  } else if (match$3.TAG === /* Submitting */0) {
                    return /* NoUpdate */0;
                  }
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: state.input,
                            fieldsStatuses: state.fieldsStatuses,
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: /* Editing */0,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* Reset */6 :
                  return {
                          TAG: /* Update */0,
                          _0: initialState(initialInput)
                        };
              
            }
          } else {
            switch (action.TAG | 0) {
              case /* UpdateDescriptionField */0 :
                  var nextInput = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput,
                            fieldsStatuses: Formality.validateFieldOnChangeWithValidator(nextInput, state.fieldsStatuses.description, state.submissionStatus, validators_description, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            description: status,
                                            name: init.name,
                                            address: init.address
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateNameField */1 :
                  var nextInput$1 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$1,
                            fieldsStatuses: Formality.validateFieldOnChangeWithValidator(nextInput$1, state.fieldsStatuses.name, state.submissionStatus, validators_name, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            description: init.description,
                                            name: status,
                                            address: init.address
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* UpdateAddressField */2 :
                  var nextInput$2 = Curry._1(action._0, state.input);
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: nextInput$2,
                            fieldsStatuses: Formality.validateFieldOnChangeWithValidator(nextInput$2, state.fieldsStatuses.address, state.submissionStatus, validators_address, (function (status) {
                                    var init = state.fieldsStatuses;
                                    return {
                                            description: init.description,
                                            name: init.name,
                                            address: status
                                          };
                                  })),
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: state.formStatus,
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* SetSubmittedStatus */3 :
                  var input = action._0;
                  if (input !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: input,
                              fieldsStatuses: {
                                description: /* Pristine */0,
                                name: /* Pristine */0,
                                address: /* Pristine */0
                              },
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: /* Submitted */1,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: {
                                description: /* Pristine */0,
                                name: /* Pristine */0,
                                address: /* Pristine */0
                              },
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: /* Submitted */1,
                              submissionStatus: state.submissionStatus
                            }
                          };
                  }
              case /* SetSubmissionFailedStatus */4 :
                  return {
                          TAG: /* Update */0,
                          _0: {
                            input: state.input,
                            fieldsStatuses: state.fieldsStatuses,
                            collectionsStatuses: state.collectionsStatuses,
                            formStatus: {
                              TAG: /* SubmissionFailed */1,
                              _0: action._0
                            },
                            submissionStatus: state.submissionStatus
                          }
                        };
              case /* MapSubmissionError */5 :
                  var map = action._0;
                  var error$1 = state.formStatus;
                  if (typeof error$1 === "number") {
                    return /* NoUpdate */0;
                  }
                  if (error$1.TAG !== /* Submitting */0) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: state.fieldsStatuses,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: {
                                TAG: /* SubmissionFailed */1,
                                _0: Curry._1(map, error$1._0)
                              },
                              submissionStatus: state.submissionStatus
                            }
                          };
                  }
                  var error$2 = error$1._0;
                  if (error$2 !== undefined) {
                    return {
                            TAG: /* Update */0,
                            _0: {
                              input: state.input,
                              fieldsStatuses: state.fieldsStatuses,
                              collectionsStatuses: state.collectionsStatuses,
                              formStatus: {
                                TAG: /* Submitting */0,
                                _0: Caml_option.some(Curry._1(map, Caml_option.valFromOption(error$2)))
                              },
                              submissionStatus: state.submissionStatus
                            }
                          };
                  } else {
                    return /* NoUpdate */0;
                  }
              
            }
          }
        }));
  var dispatch = match[1];
  var state = match[0];
  var match$1 = state.formStatus;
  var tmp;
  tmp = typeof match$1 === "number" || match$1.TAG !== /* Submitting */0 ? false : true;
  return {
          updateDescription: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateDescriptionField */0,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateName: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateNameField */1,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          updateAddress: (function (nextInputFn, nextValue) {
              return Curry._1(dispatch, {
                          TAG: /* UpdateAddressField */2,
                          _0: (function (__x) {
                              return Curry._2(nextInputFn, __x, nextValue);
                            })
                        });
            }),
          blurDescription: (function (param) {
              return Curry._1(dispatch, /* BlurDescriptionField */0);
            }),
          blurName: (function (param) {
              return Curry._1(dispatch, /* BlurNameField */1);
            }),
          blurAddress: (function (param) {
              return Curry._1(dispatch, /* BlurAddressField */2);
            }),
          descriptionResult: Formality.exposeFieldResult(state.fieldsStatuses.description),
          nameResult: Formality.exposeFieldResult(state.fieldsStatuses.name),
          addressResult: Formality.exposeFieldResult(state.fieldsStatuses.address),
          input: state.input,
          status: state.formStatus,
          dirty: (function (param) {
              var match = state.fieldsStatuses;
              if (match.description || match.name || match.address) {
                return true;
              } else {
                return false;
              }
            }),
          valid: (function (param) {
              var match = validateForm(state.input, validators, state.fieldsStatuses);
              if (match.TAG === /* Valid */0) {
                return true;
              } else {
                return false;
              }
            }),
          submitting: tmp,
          submit: (function (param) {
              return Curry._1(dispatch, /* Submit */3);
            }),
          dismissSubmissionError: (function (param) {
              return Curry._1(dispatch, /* DismissSubmissionError */4);
            }),
          dismissSubmissionResult: (function (param) {
              return Curry._1(dispatch, /* DismissSubmissionResult */5);
            }),
          mapSubmissionError: (function (map) {
              return Curry._1(dispatch, {
                          TAG: /* MapSubmissionError */5,
                          _0: map
                        });
            }),
          reset: (function (param) {
              return Curry._1(dispatch, /* Reset */6);
            })
        };
}

var AddContact = {
  validators: validators,
  initialFieldsStatuses: initialFieldsStatuses,
  initialCollectionsStatuses: undefined,
  initialState: initialState,
  validateForm: validateForm,
  useForm: useForm
};

var initialInput = {
  address: "",
  name: "",
  description: ""
};

function AddContact$1(Props) {
  var openModal = Props.openModal;
  var match = Curry.app(Queries$FlowsUserApp.AddUser.use, [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      ]);
  var addUser = match[0];
  var form = useForm(initialInput, (function (param, param$1) {
          Curry._8(addUser, undefined, undefined, undefined, undefined, undefined, undefined, undefined, {
                  name: param.name,
                  address: param.address,
                  description: param.description
                }).then(function (_addUserResult) {
                if (_addUserResult.TAG === /* Ok */0) {
                  console.log("success?", _addUserResult._0);
                  return Curry._1(openModal, (function (param) {
                                return false;
                              }));
                }
                console.log("fail?", _addUserResult._0);
                
              });
          
        }));
  return React.createElement("div", {
              "aria-modal": true,
              "aria-labelledby": "modal-title",
              className: "fixed z-10 inset-0 overflow-y-auto",
              role: "dialog"
            }, React.createElement("div", {
                  className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
                }, React.createElement("div", {
                      "aria-hidden": true,
                      className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    }), React.createElement("span", {
                      "aria-hidden": true,
                      className: "hidden sm:inline-block sm:align-middle sm:h-screen"
                    }, ""), React.createElement("div", {
                      className: "inline-block align-bottom bg-white border-gray-500 border-2 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
                    }, React.createElement("div", {
                          className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                        }, React.createElement("button", {
                              className: "flex justify-end mt-3 w-full inline-flex justify-right shadow-sm px-4 py-2 bg-white text-base hover:bg-gray-50 focus:outline-none sm:mt-0",
                              onClick: (function (param) {
                                  return Curry._1(openModal, (function (param) {
                                                return false;
                                              }));
                                })
                            }, React.createElement("img", {
                                  className: "h-4",
                                  src: "/img/icons/cancel.svg"
                                })), React.createElement("div", {
                              className: "sm:flex flex-col sm:items-center"
                            }, React.createElement("div", {
                                  className: "mt-3 text-center sm:mt-0 sm:text-left w-full"
                                }, React.createElement("h3", {
                                      className: "text-3xl font-bold text-center",
                                      id: "modal-title"
                                    }, "Add contact"), React.createElement("div", {
                                      className: "mt-2"
                                    }, React.createElement("p", {
                                          className: "text-base text-black"
                                        }, React.createElement(Form$FlowsUserApp.make, {
                                              className: "",
                                              onSubmit: (function (param) {
                                                  return Curry._1(form.submit, undefined);
                                                }),
                                              children: null
                                            }, React.createElement(Form$FlowsUserApp.Input.make, {
                                                  label: "address",
                                                  title: "Raiden Address",
                                                  value: form.input.address,
                                                  blur: form.blurAddress,
                                                  updateCurried: Curry._1(form.updateAddress, (function (input, value) {
                                                          return {
                                                                  address: value,
                                                                  name: input.name,
                                                                  description: input.description
                                                                };
                                                        })),
                                                  result: form.addressResult,
                                                  disabled: form.submitting
                                                }), React.createElement(Form$FlowsUserApp.Input.make, {
                                                  label: "name",
                                                  title: "Name",
                                                  value: form.input.name,
                                                  blur: form.blurName,
                                                  updateCurried: Curry._1(form.updateName, (function (input, value) {
                                                          return {
                                                                  address: input.address,
                                                                  name: value,
                                                                  description: input.description
                                                                };
                                                        })),
                                                  result: form.nameResult,
                                                  disabled: form.submitting
                                                }), React.createElement(Form$FlowsUserApp.Input.make, {
                                                  label: "description",
                                                  title: "Description",
                                                  value: form.input.description,
                                                  blur: form.blurDescription,
                                                  updateCurried: Curry._1(form.updateDescription, (function (input, value) {
                                                          return {
                                                                  address: input.address,
                                                                  name: input.name,
                                                                  description: value
                                                                };
                                                        })),
                                                  result: form.descriptionResult,
                                                  disabled: form.submitting
                                                }), React.createElement("div", {
                                                  className: "-mb-4 mt-1 text-center py-3"
                                                }, React.createElement("button", {
                                                      className: "mt-3 w-full inline-flex justify-center border-b-2 border border-black shadow-sm px-4 py-2 bg-white text-base font-large text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-lg rounded"
                                                    }, "Add contact")))))))))));
}

var make = AddContact$1;

export {
  AddContact ,
  initialInput ,
  make ,
  
}
/* react Not a pure module */
