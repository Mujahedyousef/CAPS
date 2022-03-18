
const eventEmitter = require('../lib/events');
const { faker } = require('@faker-js/faker');
require("./driver");

const createOrder = () => {
  let order = {
    store: '1-206-flowers',
    orderId: faker.random.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`
  }
  console.log(`============New order =============`);
  eventEmitter.emit('pickup', order);

}

eventEmitter.on('crateOrder', createOrder);



const notification = (payload) => {

  console.log(`VENDOR:Thank you for delivering ${payload.orderId}`);


}


eventEmitter.on('notification', notification);



