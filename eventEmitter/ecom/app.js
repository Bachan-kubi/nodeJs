const emailHandler = require('./handler/emailHandler');
const loglHandler = require('./handler/logHandler');
const savelHandler = require('./handler/saveHandler');
const inventoryHandlerHandler = require('./handler/inventoryHandler');

const placeOrder = require('./servicses/orderServices');
placeOrder("k@gmail.com");