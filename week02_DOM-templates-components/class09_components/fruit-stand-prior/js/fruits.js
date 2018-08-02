'use strict';

(function(module) {

    var fruits = [{
        name: 'orange',
        color: 'orange',
        image: 'orange.png'
    }, {
        name: 'apple',
        color: 'red',
        image: 'apple.png'
    }, {
        name: 'cherry',
        color: 'red',
        image: 'cherry.png'
    }, {
        name: 'banana',
        color: 'yellow',
        image: 'banana.png'
    }, {
        name: 'mango',
        color: 'orange',
        image: 'mango.png'
    }];

    function addKey(fruit) {
        fruit.key = fruit.name.split('').reverse().join();
    }

    function addFruit(fruit) {
        if(fruit.name === 'cantaloupe') {
            throw new Error('Sorry, Lauren hates those');
        }
        addKey(fruit);
        fruits.push(fruit);
    }
    
    // initialize the fruits at the start
    for(var i = 0; i < fruits.length; i++) {
        // do the "augmentation" of the data
        addKey(fruits[i]);
    }

    module.fruits = fruits;
    module.addFruit = addFruit;

})(window.module = window.module || {});