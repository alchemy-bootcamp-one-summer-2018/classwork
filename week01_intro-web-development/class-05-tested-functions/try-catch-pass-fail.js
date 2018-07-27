
function passingTest() {
    
}

try {
    passingTest();
    console.log('passingTest PASSED');
}
catch(err) {
    console.log('passingTest FAILED');
}

function failingTest() {
    throw new Error('Assertion Error');
}

try {
    failingTest();
    console.log('failingTest FAILED');
}
catch(err) {
    console.log('failingTest PASSED');
}