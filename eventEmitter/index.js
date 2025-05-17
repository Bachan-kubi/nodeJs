const {EventEmitter} = require('events');

// 1
const firstEvent = new EventEmitter();
// firstEvent.on('order-pizza', (size, top)=>{
//     console.log(`order received, its baking, a ${size} in size and ${top} on top`);
// });
// 2

firstEvent.on('userRegistered', ({name})=>{
    console.log('welcome', name);
});
firstEvent.on('userRegistered', ({email})=>{
    console.log('sent email to ', email);
});


// firstEvent.emit('order-pizza', 'large', 'tomatto');

module.exports = firstEvent;