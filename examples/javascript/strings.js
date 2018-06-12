/*
 DO NOT
 - access string as array
*/

var s = "PLEASE locate where 'locate' occurs!";

var sl = s.length                   // length
var pos = s.indexOf("locate")       // indexOf
var pos1 = s.search("locate")       // search
var posLst = s.lastIndexOf("locate")// lastIndexOf

var ss = s.slice(7, 13)             // slice
var ss1 = s.substring(7, 13)        // substring
var ss2 = s.substr(-4)              // sbustr
var ss3 = s.replace("locate", "abc")// replace

var s1 = s.toUpperCase()            // toUpperCase
var s2 = s.toLowerCase()            // toLowerCase
var s3 = "I".concat(" ", "go")      // concat

var c1 = s.charAt(4)                // charAt
var c2 = s.charCodeAt(4)            // charCodeAt

var a1 = s.split(" ")
// var
console.log(a1);
