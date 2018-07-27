/* exported assert, test */


var tests = [];

function test(name, testFn) {
    tests.push({
        name: name,
        testFn: testFn
    });
}

function run() {
    const results = [];

    for(var i = 0; i < tests.length; i++) {
        var test = tests[i];

        try {
            test();
            results.push({
                test: test.name,
                result: 'PASSED'
            });
        }
        catch(err) {
            results.push({
                test: test.name,
                result: 'FAILED'
            });
        }
    }

    return results;
}