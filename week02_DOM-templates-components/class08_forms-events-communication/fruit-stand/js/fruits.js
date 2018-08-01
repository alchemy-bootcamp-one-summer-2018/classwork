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

    // do the "augmentation" of the data
    function addKey(fruit) {
        fruit.key = fruit.name.split('').reverse().join();
    }

    // initialize the fruits at the start
    for(var i = 0; i < fruits.length; i++) {
        addKey(fruits[i]);
    }

    // expose an "action" function for adding a fruit
    function addFruit(fruit) {
        addKey(fruit);
        fruits.push(fruit);
    }

    module.fruits = fruits;
    module.addFruit = addFruit;

})(window.module = window.module || {});