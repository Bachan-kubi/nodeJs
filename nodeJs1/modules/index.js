const {base, cases, add} = require('./module.js');
// import utilities from './module.js';

function check(){
    console.log(this);
}
console.log(this, "this");
base();
check()
// utilities.base();
// utilities.cases();
// utilities.console.log(add(5,2));