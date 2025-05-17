const {EventEmitter} = require('events');
const { emit } = require('process');
// 1
const firstEvent = new EventEmitter();
firstEvent.on('order-pizza', (size, top)=>{
    console.log(`order received, its baking, a ${size} in size and ${top} on top`);
});
// 2
firstEvent.emit('order-pizza', 'large', 'tomatto');