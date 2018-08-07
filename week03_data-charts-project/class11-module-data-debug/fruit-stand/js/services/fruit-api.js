import loadData from './load-data.js';

let fruits = loadData('fruits', createFruits);

function createFruits() {
    let data = [{
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

    for(let i = 0; i < data.length; i++) {
        addKey(data[i]);
    }

    return data;
}

function addKey(fruit) {
    fruit.key = fruit.name.split('').reverse().join();
}

export default {
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