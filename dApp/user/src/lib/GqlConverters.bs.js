// Generated by ReScript, PLEASE EDIT WITH CARE

import * as BnJs from "bn.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";

function parse(prim) {
  return new BnJs(prim);
}

function serialize(prim) {
  return prim.toString();
}

var $$BigInt = {
  parse: parse,
  serialize: serialize
};

function parse$1(prim) {
  return new BnJs(prim);
}

function serialize$1(prim) {
  return prim.toNumber();
}

var IntToBigInt = {
  parse: parse$1,
  serialize: serialize$1
};

function parse$2(json) {
  var str = Js_json.decodeString(json);
  if (str !== undefined) {
    return str;
  } else {
    console.log("CRITICAL - should never happen!");
    return "couldn't decode bytes";
  }
}

function serialize$2(bytesString) {
  return bytesString;
}

var Bytes = {
  parse: parse$2,
  serialize: serialize$2
};

export {
  $$BigInt ,
  IntToBigInt ,
  Bytes ,
  
}
/* bn.js Not a pure module */
