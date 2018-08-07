
let felix = {
    name: 'felix',
    type: 'tuxedo'
};

felix.name = 'felix the great';

let duchess = {
    name: 'duchess',
    type: 'persian'
};

// Objects have properties
console.log(felix['name'], duchess.name);

// Arrays have indexes
let cats = [felix, duchess];

console.log('array', cats[0], cats[1]);

// Objects sorted by a property

let dictionary = {
    duchess: duchess,
    felix: felix
};

console.log('dictionary', dictionary['felix'], dictionary['duchess']);

