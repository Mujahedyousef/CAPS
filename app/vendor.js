const eventEmitter = require('../lib/events');
const { faker } = require('@faker-js/faker');
require("./driver");


const crateOrder = () => {
let order ={
    store: '1-206-flowers',
    orderId: faker.random.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`
  }
    console.log("new order tobe picked up");
  eventEmitter.emit('pickup', order);
  
  }
  
  eventEmitter.on('crateOrder', crateOrder);


const notification = (payload) => {

  console.log(`vendor :Thank you for delivering ${payload.orderId}`);


}

eventEmitter.on('notification', notification);

