/*
  KeyNotes:
  - JavaScript stores dates as milliseconds
  - 3 common date input formats
    (ISO): "2015-03-25", "2015-03-25T12:00:00Z"
    (Short): "03/25/2015"
    (Long): "Mar 25 2015" / "25 Mar 2015"
  - default output format
    Web Mar 25 2015 11:00:00 GMT+1100 (AEDT)
*/

var now = new Date();
console.log("now(local): " + now.getTime());
console.log("now(local): " + now.toDateString());
console.log("now(utc)  : " + now.toUTCString());

// How to parse Date & Time with 'Zone' information ???
var ryan_dob = Date.parse("June 5, 2012");
console.log(new Date(ryan_dob));
