/*
KeyNotes
  - array can be primitive values, objects, functions
  - adding elements with high indexes can create undefined "holes" in an array
  - numbered/named indexes is the difference between 'Array' and 'Object'
  - typeof array => 'object'

DO NOT
  - new Array(...)
*/

var cars = ["Saab", "Volvo", "BMW"]

console.log(typeof cars);
console.log(Array.isArray(cars));
console.log(cars instanceof Array)
console.log(cars[1]);
console.log(cars.length);        // property: length
console.log(cars.sort());        // method  : sort()

cars.push("Buick")               // method: push()
var i;
for (i = 0; i < cars.length; i++) {
  console.log(cars[i]);          // loop through
}

var names = []
names[0] = "Alex";
names[1] = "Alice";
names[3] = "Bob"
console.log(names);

console.log("====== basic methods ======")
console.log(cars.toString());
console.log(cars.join(" * "));
// add elements
cars.push("Audi");
cars.unshift("Ford");
cars[cars.length] = "Volkswagon";
console.log("after adding: " + cars);

// remove elements
cars.pop();    // remove 'Volkswagon'
cars.shift();  // remove 'Ford'
delete cars[cars.length - 1];   // remove 'Audi'
console.log("after removing:" + cars);

// batch adding/removing
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
fruits.splice(0, 1);
console.log(fruits);

// concat()
var girls = ["Cecilie", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var allKids = girls.concat(boys);
console.log(allKids);

// slice()

// sort(), reverse()
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b) {return a - b});
console.log("sorted points: " + points);
points.sort(function(a,b) {return 0.5 - Math.random()});
console.log("randomized points: " + points);
console.log("max value: " + Math.max.apply(null,points));
console.log("min value: " + Math.min.apply(null,points));
