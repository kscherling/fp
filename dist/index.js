'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const curry = fn => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...args2) => curried(...args.concat(args2));
  };

  return curried;
};

const add = curry((a, b) => a + b);

const assign = curry((a, b) => Object.assign({}, a, b));

const cloneObj = obj => Object.assign({}, obj);

// prettier-ignore
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

const cloneObj$1 = obj => _extends({}, obj);

const deepMerge = curry((_target, _source) => {
  const source = cloneObj$1(_source);
  const target = cloneObj$1(_target);

  for (let key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }

  Object.assign(target, source);

  return target;
});

// prettier-ignore
const defaultTo = curry((fallback, obj) => obj || fallback);

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
const propOr = curry((key, fallback, obj) => obj[key] || fallback);

// prettier-ignore
const reduce = curry((fn, initial, array) => array.reduce(fn, initial));

// prettier-ignore
const split = curry((pattern, string) => string.split(pattern));

// prettier-ignore
const dig = curry((keys, props) => compose(isEmpty, reduce((acc, key) => propOr(key, {})(acc), props), split('.'))(keys));

const filter = fn => array => array.filter(fn);

const find = curry((fn, array) => array.find(fn));

const prop = curry((name, obj) => obj[name]);

const first = prop(0);

const flatten = array => [].concat([], ...array);

const join = separator => array => array.join(separator);

const last = arr => arr[arr.length - 1];

const length = prop('length');

const map = curry((fn, array) => array.map(fn));

const propIs = (prop, value) => obj => obj[prop] === value;

const reverse = arr => [...arr].reverse();

const sort = curry((fn, array) => array.sort(fn));

const sum = reduce(add, 0);

// prettier-ignore
const toArray$1 = string => Array.isArray(string) ? string : [string];

const trace = curry((msg, arg) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(msg, arg);
  }

  return arg;
});

const uniq = array => [...new Set(array)];

const valueOr = fallback => val => val || fallback;

const shallowMerge = obj => (...objs) => Object.assign({}, obj, ...objs);

const wrapObj = key => val => ({ [key]: val });

const entries = obj => Object.entries(obj);

exports.add = add;
exports.assign = assign;
exports.curry = curry;
exports.cloneObj = cloneObj;
exports.compose = compose;
exports.deepMerge = deepMerge;
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
exports.reverse = reverse;
exports.sort = sort;
exports.split = split;
exports.sum = sum;
exports.toArray = toArray$1;
exports.trace = trace;
exports.uniq = uniq;
exports.valueOr = valueOr;
exports.shallowMerge = shallowMerge;
exports.wrapObj = wrapObj;
exports.entries = entries;
