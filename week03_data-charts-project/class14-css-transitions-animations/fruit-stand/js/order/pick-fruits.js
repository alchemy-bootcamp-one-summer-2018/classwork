import html from '../html.js';
import FruitList from '../shared/fruit-list.js';

let template = function() {
    return html`        
        <section>
            <p>Chose from one of over <span class="fruit-count"></span> delicious fruits!</p>
        </section>
    `;
};

export default class PickFruits {
    constructor(props) {
        this.fruits = props.fruits;
        this.onSelect = props.onSelect;
    }

    update(props) {
        this.fruits = props.fruits;
        this.fruitList.update(props);   
    }
    
    updateCount(count) {
        this.countSpan.textContent = count;
    }


    render() {
        let dom = template();
        
        this.countSpan = dom.querySelector('.fruit-count');
        let section = dom.querySelector('section');

        this.fruitList = new FruitList({
            fruits: this.fruits,
            onSelect: this.onSelect
        });
        
        section.appendChild(this.fruitList.render());

        this.updateCount(this.fruits.length);

        return dom;
    }
}