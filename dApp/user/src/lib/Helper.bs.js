// Generated by ReScript, PLEASE EDIT WITH CARE

import * as $$String from "bs-platform/lib/es6/string.js";
import * as MomentRe from "bs-moment/src/MomentRe.bs.js";
import * as Caml_format from "bs-platform/lib/es6/caml_format.js";

function isPositiveStringInteger(str) {
  var f = /^([0-9]\d*)$/;
  return f.test(str);
}

function elipsify(inputString, maxLength) {
  if (inputString.length > maxLength) {
    return $$String.sub(inputString, 0, maxLength - 3 | 0) + "...";
  } else {
    return inputString;
  }
}

function elipsifyMiddle(inputString, maxLength, trailingCharacters) {
  var stringLength = inputString.length;
  if (stringLength > maxLength && (trailingCharacters + maxLength | 0) < stringLength) {
    return $$String.sub(inputString, 0, maxLength - 3 | 0) + ("..." + $$String.sub(inputString, Math.abs(stringLength - trailingCharacters | 0), trailingCharacters));
  } else {
    return inputString;
  }
}

function bnToMoment(bn) {
  return MomentRe.momentWithUnix(Caml_format.caml_int_of_string(bn.toString()));
}

export {
  isPositiveStringInteger ,
  elipsify ,
  elipsifyMiddle ,
  bnToMoment ,
  
}
/* MomentRe Not a pure module */
