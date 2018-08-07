

class Cat {
    constructor(props) {
        this.name = props.name;
        this.type = props.type;
    }
}

// let props = {
//     name: 'felix',
//     type: 'tuxedo'
// };

// let felix = new Cat(props);

let felix = new Cat({
    name: 'felix',
    type: 'tuxedo'
});

// let felix = new Cat('felix', 'tuxedo');

console.log(felix);