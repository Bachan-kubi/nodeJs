const {EventEmitter} = require('events');

const firstEvent = new EventEmitter();
console.log(firstEvent.emit('ami nai'));