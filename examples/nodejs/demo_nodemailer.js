/*
sudo npm install -g nodemailer

nodemailer.createTransport(transport[, defaults])
 - transport: configuration/connection-url/transport-plugin
 - defaults:  default values for mail options
*/

var nodemailer = require('/usr/local/lib/node_modules/nodemailer');

var transConf = {
  service: 'gmail',
  auth: {
    user: 'alexli7802@gmail.com',
    pass: 'Trouble_2012'
  }
}

var email = {
  from: 'alexli7802@gmail.com',
  to: 'alex.xin.li@hotmail.com',
  subject: 'Test from nodeemailer',
  text: 'world cup 2018 has begun!'
}
var transporter = nodemailer.createTransport(transConf);
transporter.sendMail(email, (err,info)=>{
  if (err) console.log(err);
  else console.log('Email sent: ' + info.response);
});
