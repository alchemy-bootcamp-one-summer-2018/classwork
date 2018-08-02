'use strict';
(function(module){
    
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
        constructor(fruits, onFruitRemove) {
            this.fruits = fruits;
            this.lastFruits = fruits.slice();
            this.onFruitRemove = onFruitRemove;
        }

        update(fruits) {
            let lastFruits = this.lastFruits;

            // remove
            for(let i = 0; i < lastFruits.length; i++) {
                let index = fruits.indexOf(lastFruits[i]);
                if(index > -1) continue;
                this.ul.children[i].remove();
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

        renderFruit(fruit) {
            let fruitCard = new FruitCard(fruit, this.onFruitRemove);
            this.ul.appendChild(fruitCard.render());
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

    module.FruitList = FruitList;

})(window.module = window.module || {});