/*
  KeyNotes:
  - object has 'Properties' & 'Methods'

  DONOTs
  - var x = new String()/Number()/Boolean()       // BAD!
*/

var jd = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function() {
    return this.firstName + " " + this.lastName
  }
};

console.log(jd.fullName());
