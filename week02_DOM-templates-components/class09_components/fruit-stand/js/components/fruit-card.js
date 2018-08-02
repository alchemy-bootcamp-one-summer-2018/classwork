'use strict';

(function(module) {
    let html = module.html;

    let template = function(fruit) {

        return html`
            <li>
                <h2>${fruit.name}</h2>
                <img src="images/${fruit.image}" alt="${fruit.name}">
                <span class="color-name" 
                    style="background: ${fruit.color}">
                    ${fruit.color}
                </span>
            </li>
        `;
    };

    class FruitCard {
        constructor(props) {
            this.fruit = props.fruit;
        }
        
        render() {
            let dom = template(this.fruit);
            return dom;
        }
    }

    module.FruitCard = FruitCard;

})(window.module = window.module || {});