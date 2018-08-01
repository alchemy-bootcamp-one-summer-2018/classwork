'use strict';

(function(module){
    let fruits = module.fruits;
    let toDOM = module.toDOM;
    let html = module.html;

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


    // loop each fruit
    for(let i = 0; i < fruits.length; i++) {
        let fruit = fruits[i];
        // make a fruit template instance
        let dom = render(fruit);

        // append it to the ul
        ul.appendChild(dom);
    }

})(window.module = window.module || {});