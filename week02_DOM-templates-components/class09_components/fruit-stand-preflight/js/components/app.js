'use strict';
(function(module){

    let html = module.html;
    let FruitList = module.FruitList;
    let FruitForm = module.FruitForm;
    let fruitApi = module.fruitApi;

    let template = function() {
        return html`        
            <header>
                <h1>Fruit Stand</h1>
            </header>

            <main></main>
        `;
    };

    class App {
        render() {
            let dom = template();
            let main = dom.querySelector('main');

            let fruits = fruitApi.get();
            let fruitList = new FruitList(fruits, (fruit) => {
                fruitApi.remove(fruit);
                fruitList.update(fruits);
            });

            let fruitForm = new FruitForm((fruit) => {
                fruitApi.add(fruit);
                fruitList.update(fruits);
            });

            main.appendChild(fruitList.render());
            main.appendChild(fruitForm.render());
              
            return dom;
        }
    }

    module.App = App;

})(window.module = window.module || {});