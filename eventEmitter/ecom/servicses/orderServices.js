const orderEmitter = require("../events/eventsEmitter");

function placeOrder(email){
    const order = {
        email,
        createdAt: new Date()
    };
    orderEmitter.emit("orderPlaced", order);
};

module.exports = placeOrder;