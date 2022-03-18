'use strict';

const eventEmitter = require('./lib/events')


 require('./app/driver');
require("./app/vendor");

setInterval(() => {
  eventEmitter.emit('createOrder');
}, 9000)

// setInterval(()=>{
//   eventEmitter.emit('inTtransit', EVENT.payload);
// },2000)

// setInterval(()=>{
//   eventEmitter.emit('delivered', EVENT.payload);
// },3000)
