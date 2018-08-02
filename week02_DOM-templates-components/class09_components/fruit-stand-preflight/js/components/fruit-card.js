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
        constructor(props) {
            this.fruit = props.fruit;
            this.onRemove = props.onRemove;
        }

        render() {
            let dom = template(this.fruit);
            let removeButton = dom.querySelector('button');
            
            removeButton.addEventListener('click', () => {
                this.onRemove(this.fruit);
            });

            return dom;
        }
    }

    module.FruitCard = FruitCard;

})(window.module = window.module || {});