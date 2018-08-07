import html from '../html.js';
import FruitList from './fruit-list.js';
import FruitForm from './fruit-form.js';
import fruitApi from '../services/fruit-api.js';

let template = function() {
    return html`        
        <header>
            <h1>Fruit Stand</h1>
        </header>

        <main></main>
    `;
};

export default class App {
    render() {
        let dom = template();
        let main = dom.querySelector('main');

        let fruits = fruitApi.get();
        let fruitList = new FruitList({
            fruits: fruits, 
            onRemove: (fruit) => {
                fruitApi.remove(fruit);
                fruitList.update({
                    fruits: fruits
                });
            }
        });

        let fruitForm = new FruitForm({
            onAdd: (fruit) => {
                fruitApi.add(fruit);
                fruitList.update({
                    fruits: fruits
                });
            }
        });

        main.appendChild(fruitList.render());
        main.appendChild(fruitForm.render());
            
        return dom;
    }
}