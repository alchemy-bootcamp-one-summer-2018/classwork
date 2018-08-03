VanillaJS Component Architectures
===


## Template(s)

Use functions and template literals to create blocks of html. You can use more than one, or none if component is very simple.

## Component Class

```js

// import common helper for templates
let html = module.html;
// import any child components used by this component
let FruitCard = module.FruitCard;

// Defined template function for initial rendering
let template = function(count) {
    return html`
        <section>
            <h2>Available Fruits</h2>
            <p>Chose from one of over <span class="fruit-count">${count}</span> delicious fruits!</p>
            <ul></ul>
        </section>
    `;
};

// Class definition for the component
class FruitList {

    // Constructor receives initial props from parent
    constructor(props) {
        // assign passed props as properties of "this"
        this.fruits = props.fruits;
        // includes callback functions too!
        this.onRemove = props.onRemove;
        
        // track data if needed and data is object-based
        this.lastFruits = this.fruits.slice();
    }

    // if component will be updated, include an update
    // method that receives new props
    update(props) {
        // list comparison
        let fruits = props.fruits;
        let lastFruits = this.lastFruits;

        // remove - is there one from last time not in new array?
        for(let i = 0; i < lastFruits.length; i++) {
            let index = fruits.indexOf(lastFruits[i]);
            if(index > -1) continue;
            this.ul.children[i].remove();
        }

        // add - is there one in new array not in one from last time?
        for(let i = 0; i < fruits.length; i++) {
            let fruit = fruits[i];
            if(lastFruits.includes(fruit)) continue;
            this.renderFruit(fruit);
        }

        // text update
        this.spanCount.textContent = count;

        // update tracking information
        this.lastFruits = fruits.slice();
    }

    // rendering common to both initial render and
    // update moved to dedicated method
    renderFruit(fruit) {
        // create an instance of the child component
        let fruitCard = new FruitCard({
            fruit: fruit, 
            // pass-thru callback function
            onRemove: this.onRemove
        });

        // call "render()" and append to place in dom
        this.ul.appendChild(fruitCard.render());
    }

    // initial render. must return dom
    render() {
        let fruits = this.fruits;
        // call the template function
        let dom = template(fruits.length);

        // store this elements on "this" because
        // they are involved in update as well as render
        this.ul = dom.querySelector('ul');
        this.countSpan = dom.querySelector('.fruit-count');

        // example of multiple child components based on an array
        for(let i = 0; i < fruits.length; i++) {
            this.renderFruit(fruits[i]);
        }

        // don't forget to return the components DOM!
        return dom;
    }
}

// export the component class
module.FruitList = FruitList;

```