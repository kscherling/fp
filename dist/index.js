'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const curry$1 = fn => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...args2) => curried(...args.concat(args2));
  };

  return curried;
};

const add$1 = curry$1((a, b) => a + b);

// prettier-ignore
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

// prettier-ignore
const defaultTo = curry$1((fallback, obj) => obj || fallback);

const isEmpty = value => {
  switch (typeof value) {
    case 'object':
      if (Array.isArray(value)) {
        return value.length ? value : undefined;
      }

      return Object.keys(value).length ? value : undefined;
    default:
      return value;
  }
};

// prettier-ignore
const propOr = curry$1((key, fallback, obj) => obj[key] || fallback);

// prettier-ignore
const reduce = curry$1((fn, initial, array) => array.reduce(fn, initial));

// prettier-ignore
const split = curry$1((pattern, string) => string.split(pattern));

// prettier-ignore
const dig = curry$1((keys, props) => compose(isEmpty, reduce((acc, key) => propOr(key, {})(acc), props), split('.'))(keys));

const filter = fn => array => array.filter(fn);

const find = curry$1((fn, array) => array.find(fn));

const prop = curry$1((name, obj) => obj[name]);

const first = prop(0);

const flatten = array => [].concat([], ...array);

const join = separator => array => array.join(separator);

const last = arr => arr[arr.length - 1];

const length = prop('length');

const map = curry$1((fn, array) => array.map(fn));

const propIs = (prop, value) => obj => obj[prop] === value;

const sort = curry$1((fn, array) => array.sort(fn));

const sum = reduce(add, 0);

// prettier-ignore
const toArray = string => Array.isArray(string) ? string : [string];

const trace = curry((msg, arg) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(msg, arg);
  }

  return arg;
});

const uniq = array => [...new Set(array)];

const valueOr = fallback => obj => obj || fallback;

exports.add = add$1;
exports.curry = curry$1;
exports.compose = compose;
exports.defaultTo = defaultTo;
exports.dig = dig;
exports.filter = filter;
exports.find = find;
exports.first = first;
exports.flatten = flatten;
exports.isEmpty = isEmpty;
exports.join = join;
exports.last = last;
exports.length = length;
exports.map = map;
exports.prop = prop;
exports.propIs = propIs;
exports.propOr = propOr;
exports.reduce = reduce;
exports.sort = sort;
exports.split = split;
exports.sum = sum;
exports.toArray = toArray;
exports.trace = trace;
exports.uniq = uniq;
exports.valueOr = valueOr;
