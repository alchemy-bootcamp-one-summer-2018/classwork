'use strict';

(function(module) {

    let fruits;

    let json = window.localStorage.getItem('fruits');

    if(json && json !== 'undefined') {
        fruits = JSON.parse(json);
    }
    else {
        fruits = [{
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
    
        for(let i = 0; i < fruits.length; i++) {
            addKey(fruits[i]);
        }
    }

    window.addEventListener('beforeunload', () => {
        window.localStorage.setItem('fruits', JSON.stringify(fruits));
    });


    function addKey(fruit) {
        fruit.key = fruit.name.split('').reverse().join();
    }

    let fruitApi = {
        get: function() {
            return fruits;
        },
        add: function(fruit) {
            if(fruit.name === 'cantaloupe') {
                throw new Error('Sorry, Lauren hates those!');
            }
            addKey(fruit);
            fruits.push(fruit);
        },
        remove: function(fruit) {
            for(let i = 0; i < fruits.length; i++) {
                if(fruits[i] === fruit) {
                    fruits.splice(i, 1);
                    break;
                }
            }
        }
    };

    module.fruitApi = fruitApi;

})(window.module = window.module || {});