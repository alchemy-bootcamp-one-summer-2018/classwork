/* exported calc */

var calc = {
    add: function(x, y) {
        return x + y;
    },

    subtract: function(x, y) {
        return x - y;
    },

    multiply: function(x, y) {
        return x * y;
    },

    divide: function(x, y) {
        return x / y;
    },
};

calc.add.symbol = '+';
calc.subtract.symbol = '-';
calc.multiply.symbol = '*';
calc.divide.symbol = '/';
