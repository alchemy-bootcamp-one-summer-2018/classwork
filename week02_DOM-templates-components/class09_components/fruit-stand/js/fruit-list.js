'use strict';

(function(module){
    // the data we need
    let fruits = module.fruits;
    // helper stuff for template
    let toDOM = module.toDOM;
    let html = module.html;
    // track the last fruits we saw (so we know what to update)
    let lastFruits = fruits.slice();

    // reference the ul
    let ul = document.getElementById('fruits');

    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    let render = function(fruit) {
        return toDOM(html`        
            <li>
                <h2>${fruit.name}</h2>
                <img src="images/${fruit.image}" alt="${fruit.name}">
                <span class="color-name" 
                    style="background: ${fruit.color}">
                    ${fruit.color}
                </span>
            </li>
        `);
    };

    // shared functionality between initial load and
    // subsequent update calls
    function renderFruit(fruit) {
        // make a fruit template instance
        let dom = render(fruit);
        // append it to the ul
        ul.appendChild(dom);
    }

    // expose (export) a function to let this component
    // know the data has changed
    function updateFruitList() {
        // loop through and find any new fruit and render them
        for(let i = 0; i < fruits.length; i++) {
            let fruit = fruits[i];
            if(lastFruits.includes(fruit)) continue;
            renderFruit(fruit);
        }

        // update the "last" know fruits we saw
        lastFruits = fruits.slice();
    }

    // loop each fruit
    for(let i = 0; i < fruits.length; i++) {
        renderFruit(fruits[i]);
    }

    // export update function
    module.updateFruitList = updateFruitList;

})(window.module = window.module || {});