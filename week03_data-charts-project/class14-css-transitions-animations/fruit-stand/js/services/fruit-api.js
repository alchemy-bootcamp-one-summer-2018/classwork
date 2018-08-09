import data from './data.js';

if(!data.fruits) {
    data.fruits = createFruits();
}

function createFruits() {
    return [{
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
}

export default {
    get: function() {
        return data.fruits;
    },

    add: function(fruit) {
        if(fruit.name === 'cantaloupe') {
            throw new Error('Sorry, Lauren hates those!');
        }
        data.fruits.push(fruit);
    },

    remove: function(fruit) {
        for(let i = 0; i < data.fruits.length; i++) {
            if(data.fruits[i] === fruit) {
                data.fruits.splice(i, 1);
                break;
            }
        }
    }
};