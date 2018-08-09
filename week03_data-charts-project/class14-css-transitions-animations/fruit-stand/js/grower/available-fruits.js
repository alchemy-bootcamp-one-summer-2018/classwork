import html from '../html.js';
import FruitList from '../shared/fruit-list.js';

let template = function() {
    return html`        
        <section>
            <h3>Fruits</h3>
        </section>
    `;
};

export default class AvailableFruits {
    constructor(props) {
        this.fruits = props.fruits;
        this.onRemove = props.onRemove;
    }

    update(props) {
        this.fruits = props.fruits;
        this.fruitList.update(props);   
    }

    render() {
        let dom = template();
        
        let section = dom.querySelector('section');
        
        this.fruitList = new FruitList({
            fruits: this.fruits,
            onRemove: this.onRemove
        });
        
        section.appendChild(this.fruitList.render());

        return dom;
    }
}