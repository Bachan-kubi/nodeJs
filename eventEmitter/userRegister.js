const firstEvent = require('./index');

function register(name, email){
    const user = {name, email};
    // console.log('registered user', user);

    firstEvent.emit('userRegistered', user);
};
module.exports = register;