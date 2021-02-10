// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var GqlConverters = require("./lib/GqlConverters.bs.js");
var ApolloClient__React_Hooks_UseQuery = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js");
var ApolloClient__React_Hooks_UseMutation = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseMutation.bs.js");

var Raw = {};

var query = (require("@apollo/client").gql`
  mutation CreatePayment($amount: String!, $interval: Int!, $numberOfPayments: Int!, $recipient: String!, $start: Int!, $state: String, $tokenAddress: String!)  {
    insert_streams_one(object: {amount: $amount, interval: $interval, numberOfPayments: $numberOfPayments, numberOfPaymentsMade: 0, recipient: $recipient, start: $start, state: $state, tokenAddress: $tokenAddress})  {
      __typename
      id
    }
  }
`);

function parse(value) {
  var value$1 = value.insert_streams_one;
  return {
          insert_streams_one: !(value$1 == null) ? ({
                __typename: value$1.__typename,
                id: value$1.id
              }) : undefined
        };
}

function serialize(value) {
  var value$1 = value.insert_streams_one;
  var insert_streams_one;
  if (value$1 !== undefined) {
    var value$2 = value$1.id;
    var value$3 = value$1.__typename;
    insert_streams_one = {
      __typename: value$3,
      id: value$2
    };
  } else {
    insert_streams_one = null;
  }
  return {
          insert_streams_one: insert_streams_one
        };
}

function serializeVariables(inp) {
  var a = inp.state;
  return {
          amount: inp.amount,
          interval: inp.interval,
          numberOfPayments: inp.numberOfPayments,
          recipient: inp.recipient,
          start: inp.start,
          state: a !== undefined ? a : undefined,
          tokenAddress: inp.tokenAddress
        };
}

function makeVariables(amount, interval, numberOfPayments, recipient, start, state, tokenAddress, param) {
  return {
          amount: amount,
          interval: interval,
          numberOfPayments: numberOfPayments,
          recipient: recipient,
          start: start,
          state: state,
          tokenAddress: tokenAddress
        };
}

var CreatePaymentStream_inner = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables
};

var include = ApolloClient__React_Hooks_UseMutation.Extend({
      query: query,
      Raw: Raw,
      parse: parse,
      serialize: serialize,
      serializeVariables: serializeVariables
    });

var CreatePaymentStream_use = include.use;

var CreatePaymentStream_useWithVariables = include.useWithVariables;

var CreatePaymentStream = {
  CreatePaymentStream_inner: CreatePaymentStream_inner,
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  use: CreatePaymentStream_use,
  useWithVariables: CreatePaymentStream_useWithVariables
};

var Raw$1 = {};

var query$1 = (require("@apollo/client").gql`
  query GetStreamData($currentTimestamp: Int!)  {
    streams(where: {state: {_eq: "OPEN"}, nextPayment: {_lte: $currentTimestamp}})  {
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
    }
  }
`);

function parse$1(value) {
  var value$1 = value.streams;
  return {
          streams: value$1.map(function (value) {
                return {
                        __typename: value.__typename,
                        id: value.id,
                        amount: GqlConverters.$$BigInt.parse(value.amount),
                        interval: GqlConverters.IntToBigInt.parse(value.interval),
                        numberOfPayments: GqlConverters.IntToBigInt.parse(value.numberOfPayments),
                        numberOfPaymentsMade: GqlConverters.IntToBigInt.parse(value.numberOfPaymentsMade),
                        recipient: value.recipient,
                        state: value.state,
                        tokenAddress: value.tokenAddress,
                        startPayment: GqlConverters.IntToBigInt.parse(value.startPayment),
                        nextPayment: GqlConverters.IntToBigInt.parse(value.nextPayment)
                      };
              })
        };
}

function serialize$1(value) {
  var value$1 = value.streams;
  var streams = value$1.map(function (value) {
        var value$1 = value.nextPayment;
        var value$2 = GqlConverters.IntToBigInt.serialize(value$1);
        var value$3 = value.startPayment;
        var value$4 = GqlConverters.IntToBigInt.serialize(value$3);
        var value$5 = value.tokenAddress;
        var value$6 = value.state;
        var value$7 = value.recipient;
        var value$8 = value.numberOfPaymentsMade;
        var value$9 = GqlConverters.IntToBigInt.serialize(value$8);
        var value$10 = value.numberOfPayments;
        var value$11 = GqlConverters.IntToBigInt.serialize(value$10);
        var value$12 = value.interval;
        var value$13 = GqlConverters.IntToBigInt.serialize(value$12);
        var value$14 = value.amount;
        var value$15 = GqlConverters.$$BigInt.serialize(value$14);
        var value$16 = value.id;
        var value$17 = value.__typename;
        return {
                __typename: value$17,
                id: value$16,
                amount: value$15,
                interval: value$13,
                numberOfPayments: value$11,
                numberOfPaymentsMade: value$9,
                recipient: value$7,
                state: value$6,
                tokenAddress: value$5,
                startPayment: value$4,
                nextPayment: value$2
              };
      });
  return {
          streams: streams
        };
}

function serializeVariables$1(inp) {
  return {
          currentTimestamp: inp.currentTimestamp
        };
}

function makeVariables$1(currentTimestamp, param) {
  return {
          currentTimestamp: currentTimestamp
        };
}

var GetStreamData_inner = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables$1,
  makeVariables: makeVariables$1
};

var include$1 = ApolloClient__React_Hooks_UseQuery.Extend({
      query: query$1,
      Raw: Raw$1,
      parse: parse$1,
      serialize: serialize$1,
      serializeVariables: serializeVariables$1
    });

var GetStreamData_refetchQueryDescription = include$1.refetchQueryDescription;

var GetStreamData_use = include$1.use;

var GetStreamData_useLazy = include$1.useLazy;

var GetStreamData_useLazyWithVariables = include$1.useLazyWithVariables;

var GetStreamData = {
  GetStreamData_inner: GetStreamData_inner,
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables$1,
  makeVariables: makeVariables$1,
  refetchQueryDescription: GetStreamData_refetchQueryDescription,
  use: GetStreamData_use,
  useLazy: GetStreamData_useLazy,
  useLazyWithVariables: GetStreamData_useLazyWithVariables
};

var Raw$2 = {};

var query$2 = (require("@apollo/client").gql`
  mutation CloseStreamEntry($id: Int!, $paymentsMade: Int!, $state: String!)  {
    update_streams_by_pk(pk_columns: {id: $id}, _set: {numberOfPaymentsMade: $paymentsMade, state: $state})  {
      __typename
      id
      state
    }
  }
`);

function parse$2(value) {
  var value$1 = value.update_streams_by_pk;
  return {
          update_streams_by_pk: !(value$1 == null) ? ({
                __typename: value$1.__typename,
                id: value$1.id,
                state: value$1.state
              }) : undefined
        };
}

function serialize$2(value) {
  var value$1 = value.update_streams_by_pk;
  var update_streams_by_pk;
  if (value$1 !== undefined) {
    var value$2 = value$1.state;
    var value$3 = value$1.id;
    var value$4 = value$1.__typename;
    update_streams_by_pk = {
      __typename: value$4,
      id: value$3,
      state: value$2
    };
  } else {
    update_streams_by_pk = null;
  }
  return {
          update_streams_by_pk: update_streams_by_pk
        };
}

function serializeVariables$2(inp) {
  return {
          id: inp.id,
          paymentsMade: inp.paymentsMade,
          state: inp.state
        };
}

function makeVariables$2(id, paymentsMade, state, param) {
  return {
          id: id,
          paymentsMade: paymentsMade,
          state: state
        };
}

var CloseStreamEntry_inner = {
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

var CloseStreamEntry_use = include$2.use;

var CloseStreamEntry_useWithVariables = include$2.useWithVariables;

var CloseStreamEntry = {
  CloseStreamEntry_inner: CloseStreamEntry_inner,
  Raw: Raw$2,
  query: query$2,
  parse: parse$2,
  serialize: serialize$2,
  serializeVariables: serializeVariables$2,
  makeVariables: makeVariables$2,
  use: CloseStreamEntry_use,
  useWithVariables: CloseStreamEntry_useWithVariables
};

var Raw$3 = {};

var query$3 = (require("@apollo/client").gql`
  mutation UpdateStreamEntry($id: Int!, $paymentsMade: Int!, $nextPayment: Int!)  {
    update_streams_by_pk(pk_columns: {id: $id}, _set: {numberOfPaymentsMade: $paymentsMade, nextPayment: $nextPayment})  {
      __typename
      id
      numberOfPaymentsMade
      nextPayment
    }
  }
`);

function parse$3(value) {
  var value$1 = value.update_streams_by_pk;
  return {
          update_streams_by_pk: !(value$1 == null) ? ({
                __typename: value$1.__typename,
                id: value$1.id,
                numberOfPaymentsMade: value$1.numberOfPaymentsMade,
                nextPayment: value$1.nextPayment
              }) : undefined
        };
}

function serialize$3(value) {
  var value$1 = value.update_streams_by_pk;
  var update_streams_by_pk;
  if (value$1 !== undefined) {
    var value$2 = value$1.nextPayment;
    var value$3 = value$1.numberOfPaymentsMade;
    var value$4 = value$1.id;
    var value$5 = value$1.__typename;
    update_streams_by_pk = {
      __typename: value$5,
      id: value$4,
      numberOfPaymentsMade: value$3,
      nextPayment: value$2
    };
  } else {
    update_streams_by_pk = null;
  }
  return {
          update_streams_by_pk: update_streams_by_pk
        };
}

function serializeVariables$3(inp) {
  return {
          id: inp.id,
          paymentsMade: inp.paymentsMade,
          nextPayment: inp.nextPayment
        };
}

function makeVariables$3(id, paymentsMade, nextPayment, param) {
  return {
          id: id,
          paymentsMade: paymentsMade,
          nextPayment: nextPayment
        };
}

var UpdateStreamEntry_inner = {
  Raw: Raw$3,
  query: query$3,
  parse: parse$3,
  serialize: serialize$3,
  serializeVariables: serializeVariables$3,
  makeVariables: makeVariables$3
};

var include$3 = ApolloClient__React_Hooks_UseMutation.Extend({
      query: query$3,
      Raw: Raw$3,
      parse: parse$3,
      serialize: serialize$3,
      serializeVariables: serializeVariables$3
    });

var UpdateStreamEntry_use = include$3.use;

var UpdateStreamEntry_useWithVariables = include$3.useWithVariables;

var UpdateStreamEntry = {
  UpdateStreamEntry_inner: UpdateStreamEntry_inner,
  Raw: Raw$3,
  query: query$3,
  parse: parse$3,
  serialize: serialize$3,
  serializeVariables: serializeVariables$3,
  makeVariables: makeVariables$3,
  use: UpdateStreamEntry_use,
  useWithVariables: UpdateStreamEntry_useWithVariables
};

exports.CreatePaymentStream = CreatePaymentStream;
exports.GetStreamData = GetStreamData;
exports.CloseStreamEntry = CloseStreamEntry;
exports.UpdateStreamEntry = UpdateStreamEntry;
/* query Not a pure module */
