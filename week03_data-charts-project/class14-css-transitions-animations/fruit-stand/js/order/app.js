import html from '../html.js';
import Header from '../shared/header.js';
import PickFruits from './pick-fruits.js';
import Cart from './cart.js';
import fruitApi from '../services/fruit-api.js';
import orderApi from '../services/order-api.js';

let template = function() {
    return html`        
        <header></header>
        
        <main id="order-main">
            <h2>Order Fruits</h2>
            <section id="fruit-order">
                <div id="pick-fruits"></div>
                <div id="cart"></div>
            </section>
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

        let pickFruitsSection = dom.querySelector('#pick-fruits');

        let fruits = fruitApi.get();
        let pickFruits = new PickFruits({
            fruits: fruits, 
            onSelect: (fruit) => {
                console.log('user selected', fruit);
                orderApi.add(fruit);
                
            }
        });
        pickFruitsSection.appendChild(pickFruits.render());
           
        let cartSection = dom.querySelector('#cart');
        let order = orderApi.get();
        let cart = new Cart({
            order: order
        });
        cartSection.appendChild(cart.render());

        return dom;
    }
}