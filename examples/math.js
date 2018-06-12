
var r1 = Math.random();
console.log("r1 = " + r1);

// [0,9]
var r2 = Math.floor(r1 * 10);
console.log("r2 = " + r2);

// random integer generator
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("random int: " + randomInt(0,10));

var v = randomInt(0,2)
switch (v) {
  case 0:
    console.log("0 means: BAD!");
    break;
  case 1:
    console.log("1 means: OK!");
    break;
  case 2:
    console.log("2 means: GREAT!");
    break;
  default:
    console.log("not expected!");
}
