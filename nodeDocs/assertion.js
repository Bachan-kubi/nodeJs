const assert = require('assert');

function add(a, b) {
    return a + b;
}

// Test the add function
console.log(assert.strictEqual(add(1, 2), 3, 'Adding 1 + 2 should equal 3'));
assert.strictEqual(add(-1, 1), 0, 'Adding -1 + 1 should equal 0');
assert.strictEqual(add(10, -5), 5, 'Adding 10 + (-5) should equal 5');
