import data from './data.js';

if(!data.order) {
    data.order = {};
}

export default {
    get: function() {
        return data.order;
    },

    add: function(fruit) {
        if(!data.order[fruit.name]) {
            data.order[fruit.name] = 1;
        }
        else {
            data.order[fruit.name]++;
        }
    }
};