
var fs = require('fs');
var rs = fs.createReadStream('./keynotes.txt');
rs.on('open', ()=>{
  console.log('The file is open now!');
})

/*
Events modules
- Node.js built-in module (create/fire/listen-for user events)
- EventEmitter
*/
var events = require('events');
var eventEmitter = new events.EventEmitter();

function echoEvent() {
  console.log('I hear a scream');
}

eventEmitter.on('scream', echoEvent);
eventEmitter.emit('scream');
