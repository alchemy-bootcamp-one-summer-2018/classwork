import html from '../html.js';
import Header from '../shared/header.js';
import AvailableFruits from './available-fruits.js';
import FruitForm from './fruit-form.js';
import fruitApi from '../services/fruit-api.js';

let template = function() {
    return html`        
        <header></header>

        <main>
            <h2>Grower Page</h2>
        </main>

        <footer>
            &copy; 2018 Alchemy Fruit Stand
        </footer>
    `;
};

export default class App {
    render() {
        let dom = template();
        let headerEl = dom.querySelector('header');
        let header = new Header();
        headerEl.appendChild(header.render());

        let main = dom.querySelector('main');

        let fruitForm = new FruitForm({
            onAdd: (fruit) => {
                fruitApi.add(fruit);
                available.update({
                    fruits: fruits
                });
            }
        });
        main.appendChild(fruitForm.render());

        let fruits = fruitApi.get();

        let available = new AvailableFruits({
            fruits: fruits, 
            onRemove: (fruit) => {
                fruitApi.remove(fruit);
                available.update({
                    fruits: fruits
                });
            }
        });

        main.appendChild(available.render());
            
        return dom;
    }
}