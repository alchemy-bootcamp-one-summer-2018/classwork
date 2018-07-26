/* globals students */
/* exported makePairs */

var tries = 0;

function makePairs() {

    // need some student github usernames
    // we need to be able to run the process again
    var copy = students.slice();

    console.log('random number', getRandomIndex(13));

    // track number of times this function has been called
    tries += 1;

    function getRandomStudent() {
        var indexOne = getRandomIndex(copy.length);
        // get student before we remove them
        var studentOne = copy[indexOne];
        // remove from the array
        copy.splice(indexOne, 1);

        return studentOne;
    }

    // make one pair
    var studentOne = getRandomStudent();
    var studentTwo = getRandomStudent();

    

    // how to not reassign people or match people to self?
        // 1. remove from array

    // manage odd last person


    // display results
        // pairs
            // manage reset (old pairs gone)
    // display the one pair
    document.getElementById('pair-0').innerText = studentOne + ' - ' + studentTwo; 
    // update tries
    document.getElementById('tries').innerText = tries;

}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(max) {
    // The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * max); 
}