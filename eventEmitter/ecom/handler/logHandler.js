const orderEmitter = require('../events/eventsEmitter.js');

orderEmitter.on("orderPlaced", (order)=>{
    console.log(order.email, 'order logged!');
})