
var age = 34.2          // number
var name = "John Doe"   // string
var isMale = false      // boolean
var tmp                 // undefined
var me = {              // object
  firstName: "Alex",
  lastName: "Li",
  age: 40.2,
  male: false
}
var topPlayers = [      // object
  "Neymar",
  "Messi",
  "C.Ronaldo",
  "Bale",
  "Hazard",
  "Mbappa"
]
var noOne = null        // object

function printType(v) {      // function
  console.log(typeof(v));
}

printType(noOne)
printType(tmp)
printType(me)
printType(topPlayers)
printType(printType)
// printType(age)
// printType(name)
// printType(isMale)
// printType(ud)
// printType(null)
