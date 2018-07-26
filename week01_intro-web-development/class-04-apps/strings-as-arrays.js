
// strings as arrays
// reverse a string (4x)
// write a function


// strings are already array-like
var word = 'persimmon';

for(var i = 0; i < word.length; i++) {
    // console.log(word[i]);
}

// we want to do more, split on ''
var letters = word.split('');
console.log('letters:\n', letters);

var reversed = letters.reverse();
console.log('reversed:\n', reversed);

// var split = 'persimmon'.split('');
// var splitReversed = split.reverse();
// var reversedJoined = splitReversed.join('');

// same as above
var reversedJoined = 'persimmon'.split('').reverse().join('');

console.log('fully reversed word:\n', reversedJoined);

// how many changed do we have to make? 1
function reverseWord(word) {
    return word.split('').reverse().join('-');
}

// how many changes do we have to make? 4
var nommisrep = reverseWord('persimmon');
var ananab = reverseWord('banana');
var yrrehc = reverseWord('cherry');
var elppa = reverseWord('apple');

console.log(nommisrep);
console.log(ananab);
console.log(yrrehc);
console.log(elppa);