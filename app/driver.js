'use strict'

const eventEmitter = require('../lib/events');
const pickup = (payload) => {
    let EVENT = {
      event: "pickup",
      time: new Date().toString(),
      payload: payload
    }
    console.log(EVENT);
    setTimeout(function() {
      eventEmitter.emit('inTtransit', EVENT.payload);
    }, 1000);
    
  
  
  }
  eventEmitter.on('pickup', pickup);
const inTtransit = (payload) => {
    
    
    console.log(`DRIVER: picked up  ${payload.orderId}`);
    let EVENT = {
        event: 'in-transit',
        time: new Date().toString(),
        payload: payload
    }
    console.log(EVENT);
    setTimeout(function() {
        eventEmitter.emit('delivered', EVENT.payload);
      }, 3000);
    

}

eventEmitter.on('inTtransit', inTtransit);

const delivered = (payload) => {
    console.log(`DRIVER: delivered up  ${payload.orderId}`);

    eventEmitter.emit('notification', payload);
    let EVENT = {
        event: 'delivered',
        time: new Date().toString(),
        payload: payload
    }
    console.log(EVENT);


}
eventEmitter.on('delivered', delivered);