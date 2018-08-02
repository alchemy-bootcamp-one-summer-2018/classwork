'use strict';

(function(module) {
    let html = module.html;
    let FruitCard = module.FruitCard;

    let template = function() {
        return html`
            <section>
                <h2>Available Fruits</h2>
                <p>Chose from one of over <span class="fruit-count"></span> delicious fruits!</p>
                <ul></ul>
            </section>
        `;
    };

    class FruitList {

        constructor(props) {
            this.fruits = props.fruits;
            this.lastFruits = this.fruits.slice();
        }

        update(props) {
            let fruits = props.fruits;
            let lastFruits = this.lastFruits;

            for(let i = 0; i < fruits.length; i++) {
                let fruit = fruits[i];
                if(lastFruits.includes(fruit)) continue;

                this.updateFruit(fruit);
            }

            this.updateCount(fruits.length);
    
            // update the "last" know fruits we saw
            this.lastFruits = fruits.slice();
        }

        updateFruit(fruit) {
            let fruitCard = new FruitCard({
                fruit: fruit
            });
            this.ul.appendChild(fruitCard.render());
        }

        updateCount(count) {
            this.spanCount.textContent = count;
        }

        render() {
            let dom = template();
            let fruits = this.fruits;
            this.ul = dom.querySelector('ul');
            this.spanCount = dom.querySelector('span.fruit-count');

            for(let i = 0; i < fruits.length; i++) {
                this.updateFruit(fruits[i]);
            }

            this.updateCount(fruits.length);

            return dom;
        }
    }

    module.FruitList = FruitList;

})(window.module = window.module || {});