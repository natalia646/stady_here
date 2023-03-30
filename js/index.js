const upperCase = (str) => str.toUpperCase();
const tripleExclaim = (str) => str + "!!!";
const split = (str) => (some) => str.split(some);
const join = (arr) => (some) => arr.join(some);
const copy = (str) => `${str} ${str}`;
const createComposition =
  (...args) =>
  (value) =>
    args.reduce((acc, fn) => fn(acc), value);
const result = createComposition(upperCase, tripleExclaim, split, join, copy);

console.log(split('dfjjf jgrkfj rjrkf')(' ') )
console.log('dfjjf jgrkfj rjrkf'.split(' '))

console.log(result("total sale"));
