'use strict';
/* globals assert */
/* exported assert, test */

var tests = [];

function test(name, testFn) {
    tests.push({
        name: name,
        testFn: testFn
    });
}

test.run = function() {
    var testResults = runTests();
    displayResults(testResults);
};

var PASS = {
    text: 'PASS',
    color: 'green'
};

var FAIL = {
    text: 'FAIL',
    color: 'red'
};


function runTests() {
    const results = [];

    for(var i = 0; i < tests.length; i++) {
        var test = tests[i];

        try {
            test.testFn();
            test.status = PASS;
        }
        catch(err) {
            test.status = FAIL;
            test.error = err.message;
        }

        results.push(test);
    }

    return results;
}

function displayResults(tests) {
    
    for(var i = 0; i < tests.length; i++) {
        var test = tests[i];

        console.log(
            test.name + ' %c' + test.status.text,
            'color: ' + test.status.color + ';'
        );

        if(test.error) {
            console.log(
                '\t%c' + test.error || '', 
                'color: red;'
            );
        }
    }
}


// change to true to run pass and fail test tests
if(false) { // eslint-disable-line

    test('1 + 1 = 2 passes', () => {
        assert.equal(1 + 1, 2);
    });

    test('1 + 1 = 2 fails', () => {
        assert.equal(1 + 1, 3);
    });

    test.run();
}