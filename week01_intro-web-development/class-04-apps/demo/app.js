/* globals students */
/* exported makePairs */

var tries = 0;

function makePairs() {

    // need some student github usernames
    // we need to be able to run the process again
    var copy = students.slice();

    console.log('random number', getRandomInt(13));

    // track number of times this function has been called
    tries += 1;

    // randomization (Sarah sez checkout Math.random on mdn)
    // how to not reassign people or match people to self?
        // 1. remove from array

    // manage odd last person


    // display results
        // pairs
            // manage reset (old pairs gone)

    // update tries
    document.getElementById('tries').innerText = tries;

}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    // The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * max); 
}