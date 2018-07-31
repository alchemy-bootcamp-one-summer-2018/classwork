'use strict';

(function(module) {

    var fruits = [{
        name: 'orange',
        color: 'orange',
        image: 'images/orange.png'
    }, {
        name: 'apple',
        color: 'red',
        image: 'images/apple.png'
    }, {
        name: 'cherry',
        color: 'red',
        image: 'images/cherry.png'
    }, {
        name: 'banana',
        color: 'yellow',
        image: 'images/banana.png'
    }, {
        name: 'mango',
        color: 'orange',
        image: 'images/mango.png'
    }];

    module.fruits = fruits;

})(window.module = window.module || {});