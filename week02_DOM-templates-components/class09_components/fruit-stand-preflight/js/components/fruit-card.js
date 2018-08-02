'use strict';
(function(module){

    let html = module.html;
    let template = function(fruit) {
        return html`        
            <li>
                <h3>${fruit.name}</h3>
                <img src="images/${fruit.image}" alt="${fruit.name}">
                <span class="color-name" 
                    style="background: ${fruit.color}">
                    ${fruit.color}
                </span>
                <button>ⓧ</button>
            </li>
        `;
    };

    class FruitCard {
        constructor(fruit, onFruitDelete) {
            this.fruit = fruit;
            this.onFruitDelete = onFruitDelete;
        }

        render() {
            let dom = template(this.fruit);
            let deleteButton = dom.querySelector('button');
            
            deleteButton.addEventListener('click', () => {
                this.onFruitDelete(this.fruit);
            });

            return dom;
        }
    }

    module.FruitCard = FruitCard;

})(window.module = window.module || {});