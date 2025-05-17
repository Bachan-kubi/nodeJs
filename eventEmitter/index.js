const {EventEmitter} = require('events');

// 1
const firstEvent = new EventEmitter();
// firstEvent.on('order-pizza', (size, top)=>{
//     console.log(`order received, its baking, a ${size} in size and ${top} on top`);
// });
// 2

firstEvent.on('userRegistered', (user)=>{
    console.log('welcome', user.name);
});
firstEvent.on('userRegistered', (user)=>{
    console.log('sent email to ', user.email);
});


// firstEvent.emit('order-pizza', 'large', 'tomatto');

module.exports = firstEvent;