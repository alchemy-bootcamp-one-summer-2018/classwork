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
        var index = getRandomIndex(copy.length);
        // get student before we remove them
        var student = copy[index];
        // remove from the array
        copy.splice(index, 1);

        return student;
    }
    
    
    // Store the pairs in an array
    var pairs = [];
    while(copy.length > 0) {
        // make one pair
        var studentOne = getRandomStudent();
        var studentTwo = getRandomStudent();
        var pair = [studentOne, studentTwo];
        pairs.push(pair);

        // manage odd last person
        if(copy.length === 1) {
            // this both returns the last item,
            // _and_ takes it out of the copy array
            pair.push(copy[0]);
            break;
        }
    }

    for(var i = 0; i < 10; i++) {
        var pairToDisplay = pairs[i];
        var display = '';
        if(pairToDisplay) {
            display = pairToDisplay.join(' - ');
        }

        document.getElementById('pair-' + i).innerText = display;
    }

    // update tries
    document.getElementById('tries').innerText = tries;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(max) {
    // The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * max); 
}