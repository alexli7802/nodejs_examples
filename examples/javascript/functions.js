/*
  KeyNotes:
  - each function creates a new scope/accessibility/visibility

  DO NOT:
  - create global variables
*/

var glbPrefix = "2018"                   // in global-scope
function printName(name) {
  console.log(name + ": " + name.length);
}

function totalVolume(ul, dw) {
  return ul + dw
}

function prefixItemName(itemName) {
  var pf = "ali";                        // in function/local scope
  return pf + "-" + glbPrefix + "-" + itemName
}

console.log(prefixItemName("AppleWatch"));

console.log("total volume is: " + totalVolume(3.2, 4.0));
