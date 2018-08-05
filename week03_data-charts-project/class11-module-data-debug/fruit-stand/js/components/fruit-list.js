import html from '../html.js';
import FruitCard from './fruit-card.js';

let template = function() {
    return html`        
        <section>
            <h2>Available Fruits</h2>
            <p>Chose from one of over <span class="fruit-count"></span> delicious fruits!</p>
            <ul></ul>
        </section>
    `;
};

export default class FruitList {
    constructor(props) {
        this.fruits = props.fruits;
        this.lastFruits = this.fruits.slice();
        this.fruitCards = [];
        this.onRemove = props.onRemove;
        this.selected = null;
    }

    update(props) {
        let fruits = props.fruits;
        let lastFruits = this.lastFruits;

        // remove
        for(let i = 0; i < lastFruits.length; i++) {
            let index = fruits.indexOf(lastFruits[i]);
            if(index > -1) continue;
            this.ul.children[i].remove();
            this.fruitCards.splice(i, 1);
        }

        // add
        for(let i = 0; i < fruits.length; i++) {
            let fruit = fruits[i];
            if(lastFruits.includes(fruit)) continue;
            this.renderFruit(fruit);
        }

        this.updateCount(fruits.length);
        this.lastFruits = fruits.slice();
    }

    onSelect(fruit) {
        this.selected = fruit;
        let fruitCards = this.fruitCards;

        for(let i = 0; i < fruitCards.length; i++) {
            fruitCards[i].update({
                selected: this.selected
            });
        }
    }

    renderFruit(fruit) {
        let fruitCard = new FruitCard({
            fruit: fruit, 
            onRemove: this.onRemove,
            selected: this.selected,
            onSelect: (fruit) => this.onSelect(fruit),
        });
        this.ul.appendChild(fruitCard.render());
        this.fruitCards.push(fruitCard);
    }

    updateCount(count) {
        this.countSpan.textContent = count;
    }

    render() {
        let fruits = this.fruits;
        let dom = template();
        this.ul = dom.querySelector('ul');
        this.countSpan = dom.querySelector('.fruit-count');

        for(let i = 0; i < fruits.length; i++) {
            this.renderFruit(fruits[i]);
        }

        this.updateCount(fruits.length);

        return dom;
    }
}