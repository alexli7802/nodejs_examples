/*
  KeyNotes
  - 'NaN'      // type = number
  - divide by 0 will result in '+/-Infinity'

  DO NOT
  - new Number(123)
  - access Number Properties via variables, like 'x.MAX_VALUE'  (wrong!!)
*/


var x = 100 / "abc"

console.log(typeof x);
console.log(6 + NaN);
console.log(isNaN("100a"));

var y1 = 500
var y2 = new Number(500)
console.log(y1 == y2);
console.log(y1 === y2);

var z = 9.656;
console.log(z.toFixed(0));     // round up
console.log(z.toFixed(2));     // round up
console.log(z.toPrecision(2));

console.log(Number("101"));
console.log(parseInt(" 21.2"));
console.log(parseInt("w23"));

console.log(parseFloat("21.204"));
console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
