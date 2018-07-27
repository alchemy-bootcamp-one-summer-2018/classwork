/* exported assert, test */

function assert(success, message) {
    if(!success) throw new Error(message || 'expected true but was false');
}

assert.equal = function(actual, expected, message = '') {
    message += 'expected ' + expected + ' but was ' + actual;
    // eslint-disable-next-line eqeqeq
    assert(actual == expected, message);
};

// change to true to run assert and assert equals tests
if(false) { // eslint-disable-line

    try {
        assert(true);
        console.log('assert true PASSED');
    }
    catch(err) {
        console.log('assert true  FAILED');
    }

    try {
        assert(false);
        console.log('assert(false) FAILED');
    }
    catch(err) {
        console.log('assert(false) PASSED');
    }

    try {
        assert.equal(true, true);
        console.log('assert.equal(true, true) PASSED');
    }
    catch(err) {
        console.log('assert.equal(true, true) FAILED');
    }

    try {
        assert.equal(true, false);
        console.log('assert.equal(true, true) FAILED');
    }
    catch(err) {
        console.log('assert.equal(true, true) PASSED');
    }
}