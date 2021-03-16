// Generated by ReScript, PLEASE EDIT WITH CARE

import * as GqlConverters$FlowsUserApp from "./lib/GqlConverters.bs.js";
import * as ApolloClient__React_Hooks_UseQuery from "rescript-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js";
import * as ApolloClient__React_Hooks_UseMutation from "rescript-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseMutation.bs.js";

var Raw = {};

var query = (require("@apollo/client").gql`
  query ViewPaymentsStreamsWithAddress($address: String!, $state: String!)  {
    streams(where: {recipient: {_eq: $address}, state: {_eq: $state}})  {
      __typename
      id
      amount
      interval
      numberOfPayments
      numberOfPaymentsMade
      recipient
      state
      tokenAddress
      startPayment
      nextPayment
      lastPayment
    }
  }
`);

function parse(value) {
  var value$1 = value.streams;
  return {
          streams: value$1.map(function (value) {
                return {
                        __typename: value.__typename,
                        id: value.id,
                        amount: GqlConverters$FlowsUserApp.$$BigInt.parse(value.amount),
                        interval: GqlConverters$FlowsUserApp.IntToBigInt.parse(value.interval),
                        numberOfPayments: GqlConverters$FlowsUserApp.IntToBigInt.parse(value.numberOfPayments),
                        numberOfPaymentsMade: GqlConverters$FlowsUserApp.IntToBigInt.parse(value.numberOfPaymentsMade),
                        recipient: value.recipient,
                        state: value.state,
                        tokenAddress: value.tokenAddress,
                        startPayment: GqlConverters$FlowsUserApp.IntToBigInt.parse(value.startPayment),
                        nextPayment: GqlConverters$FlowsUserApp.IntToBigInt.parse(value.nextPayment),
                        lastPayment: value.lastPayment
                      };
              })
        };
}

function serialize(value) {
  var value$1 = value.streams;
  var streams = value$1.map(function (value) {
        var value$1 = value.lastPayment;
        var value$2 = value.nextPayment;
        var value$3 = GqlConverters$FlowsUserApp.IntToBigInt.serialize(value$2);
        var value$4 = value.startPayment;
        var value$5 = GqlConverters$FlowsUserApp.IntToBigInt.serialize(value$4);
        var value$6 = value.tokenAddress;
        var value$7 = value.state;
        var value$8 = value.recipient;
        var value$9 = value.numberOfPaymentsMade;
        var value$10 = GqlConverters$FlowsUserApp.IntToBigInt.serialize(value$9);
        var value$11 = value.numberOfPayments;
        var value$12 = GqlConverters$FlowsUserApp.IntToBigInt.serialize(value$11);
        var value$13 = value.interval;
        var value$14 = GqlConverters$FlowsUserApp.IntToBigInt.serialize(value$13);
        var value$15 = value.amount;
        var value$16 = GqlConverters$FlowsUserApp.$$BigInt.serialize(value$15);
        var value$17 = value.id;
        var value$18 = value.__typename;
        return {
                __typename: value$18,
                id: value$17,
                amount: value$16,
                interval: value$14,
                numberOfPayments: value$12,
                numberOfPaymentsMade: value$10,
                recipient: value$8,
                state: value$7,
                tokenAddress: value$6,
                startPayment: value$5,
                nextPayment: value$3,
                lastPayment: value$1
              };
      });
  return {
          streams: streams
        };
}

function serializeVariables(inp) {
  return {
          address: inp.address,
          state: inp.state
        };
}

function makeVariables(address, state, param) {
  return {
          address: address,
          state: state
        };
}

var ViewPaymentsStreamsWithAddress_inner = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables
};

var include = ApolloClient__React_Hooks_UseQuery.Extend({
      query: query,
      Raw: Raw,
      parse: parse,
      serialize: serialize,
      serializeVariables: serializeVariables
    });

var ViewPaymentsStreamsWithAddress_refetchQueryDescription = include.refetchQueryDescription;

var ViewPaymentsStreamsWithAddress_use = include.use;

var ViewPaymentsStreamsWithAddress_useLazy = include.useLazy;

var ViewPaymentsStreamsWithAddress_useLazyWithVariables = include.useLazyWithVariables;

var ViewPaymentsStreamsWithAddress = {
  ViewPaymentsStreamsWithAddress_inner: ViewPaymentsStreamsWithAddress_inner,
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  refetchQueryDescription: ViewPaymentsStreamsWithAddress_refetchQueryDescription,
  use: ViewPaymentsStreamsWithAddress_use,
  useLazy: ViewPaymentsStreamsWithAddress_useLazy,
  useLazyWithVariables: ViewPaymentsStreamsWithAddress_useLazyWithVariables
};

var Raw$1 = {};

var query$1 = (require("@apollo/client").gql`
  mutation CreatePaymentStream($amount: String!, $interval: Int!, $numberOfPayments: Int!, $recipient: String!, $startPayment: Int!, $tokenAddress: String!)  {
    createStream(amount: $amount, interval: $interval, numberOfPayments: $numberOfPayments, startPayment: $startPayment, tokenAddress: $tokenAddress, userAddress: $recipient)  {
      __typename
      success
      error
    }
  }
`);

function parse$1(value) {
  var value$1 = value.createStream;
  var tmp;
  if (value$1 == null) {
    tmp = undefined;
  } else {
    var value$2 = value$1.error;
    tmp = {
      __typename: value$1.__typename,
      success: value$1.success,
      error: !(value$2 == null) ? value$2 : undefined
    };
  }
  return {
          createStream: tmp
        };
}

function serialize$1(value) {
  var value$1 = value.createStream;
  var createStream;
  if (value$1 !== undefined) {
    var value$2 = value$1.error;
    var error = value$2 !== undefined ? value$2 : null;
    var value$3 = value$1.success;
    var value$4 = value$1.__typename;
    createStream = {
      __typename: value$4,
      success: value$3,
      error: error
    };
  } else {
    createStream = null;
  }
  return {
          createStream: createStream
        };
}

function serializeVariables$1(inp) {
  return {
          amount: inp.amount,
          interval: inp.interval,
          numberOfPayments: inp.numberOfPayments,
          recipient: inp.recipient,
          startPayment: inp.startPayment,
          tokenAddress: inp.tokenAddress
        };
}

function makeVariables$1(amount, interval, numberOfPayments, recipient, startPayment, tokenAddress, param) {
  return {
          amount: amount,
          interval: interval,
          numberOfPayments: numberOfPayments,
          recipient: recipient,
          startPayment: startPayment,
          tokenAddress: tokenAddress
        };
}

var CreatePaymentStream_inner = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables$1,
  makeVariables: makeVariables$1
};

var include$1 = ApolloClient__React_Hooks_UseMutation.Extend({
      query: query$1,
      Raw: Raw$1,
      parse: parse$1,
      serialize: serialize$1,
      serializeVariables: serializeVariables$1
    });

var CreatePaymentStream_use = include$1.use;

var CreatePaymentStream_useWithVariables = include$1.useWithVariables;

var CreatePaymentStream = {
  CreatePaymentStream_inner: CreatePaymentStream_inner,
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables$1,
  makeVariables: makeVariables$1,
  use: CreatePaymentStream_use,
  useWithVariables: CreatePaymentStream_useWithVariables
};

var Raw$2 = {};

var query$2 = (require("@apollo/client").gql`
  mutation AddUser($name: String!, $address: String!, $description: String!)  {
    insert_user_one(object: {name: $name, ethAddress: $address, description: $description})  {
      __typename
      name
      ethAddress
      description
    }
  }
`);

function parse$2(value) {
  var value$1 = value.insert_user_one;
  var tmp;
  if (value$1 == null) {
    tmp = undefined;
  } else {
    var value$2 = value$1.description;
    tmp = {
      __typename: value$1.__typename,
      name: value$1.name,
      ethAddress: value$1.ethAddress,
      description: !(value$2 == null) ? value$2 : undefined
    };
  }
  return {
          insert_user_one: tmp
        };
}

function serialize$2(value) {
  var value$1 = value.insert_user_one;
  var insert_user_one;
  if (value$1 !== undefined) {
    var value$2 = value$1.description;
    var description = value$2 !== undefined ? value$2 : null;
    var value$3 = value$1.ethAddress;
    var value$4 = value$1.name;
    var value$5 = value$1.__typename;
    insert_user_one = {
      __typename: value$5,
      name: value$4,
      ethAddress: value$3,
      description: description
    };
  } else {
    insert_user_one = null;
  }
  return {
          insert_user_one: insert_user_one
        };
}

function serializeVariables$2(inp) {
  return {
          name: inp.name,
          address: inp.address,
          description: inp.description
        };
}

function makeVariables$2(name, address, description, param) {
  return {
          name: name,
          address: address,
          description: description
        };
}

var AddUser_inner = {
  Raw: Raw$2,
  query: query$2,
  parse: parse$2,
  serialize: serialize$2,
  serializeVariables: serializeVariables$2,
  makeVariables: makeVariables$2
};

var include$2 = ApolloClient__React_Hooks_UseMutation.Extend({
      query: query$2,
      Raw: Raw$2,
      parse: parse$2,
      serialize: serialize$2,
      serializeVariables: serializeVariables$2
    });

var AddUser_use = include$2.use;

var AddUser_useWithVariables = include$2.useWithVariables;

var AddUser = {
  AddUser_inner: AddUser_inner,
  Raw: Raw$2,
  query: query$2,
  parse: parse$2,
  serialize: serialize$2,
  serializeVariables: serializeVariables$2,
  makeVariables: makeVariables$2,
  use: AddUser_use,
  useWithVariables: AddUser_useWithVariables
};

export {
  ViewPaymentsStreamsWithAddress ,
  CreatePaymentStream ,
  AddUser ,
  
}
/* query Not a pure module */
