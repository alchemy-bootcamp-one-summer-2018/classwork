'use strict';

(function(module){
    var fruits = module.fruits;
    var last = [];
    var toDOM = module.toDOM;
    var html = module.html;

    // reference the ul and totals span
    var ul = document.getElementById('fruits');

    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    var render = function(fruit) {
        return toDOM(html`        
            <li>
                <h3>${fruit.name}</h3>
                <img src="images/${fruit.image}" alt="${fruit.name}">
                <span class="color-name" 
                    style="background: ${fruit.color}">
                    ${fruit.color}
                </span>
            </li>
        `);
    };

    function appendFruitToTable(fruit) {
        // make a fruit template instance
        // using the render function
        var dom = render(fruit);
        // append it to the ul
        ul.appendChild(dom);       
    }

    function updateFruitList() {
        var fruit;
        // loop each fruit
        for(var i = 0; i < fruits.length; i++) {
            fruit = fruits[i];
            if(!last.includes(fruit)) {
                // call function to add
                appendFruitToTable(fruit);
            }
        }
        last = fruits.slice();
    }

    updateFruitList();

    module.updateFruitList = updateFruitList;

})(window.module = window.module || {});