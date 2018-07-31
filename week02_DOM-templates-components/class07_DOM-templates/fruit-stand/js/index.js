'use strict';

(function(module){
    var fruits = module.fruits;
    var toDOM = module.toDOM;
    var html = module.html;

    // reference the ul
    var ul = document.getElementById('fruits');

    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    var render = function(fruit) {
        return toDOM(html`        
            <li>
                <h2>${fruit.name}</h2>
                <img src="${fruit.image}" alt="${fruit.name}">
                <span class="color-name" 
                    style="background: ${fruit.color}">
                    ${fruit.color}
                </span>
            </li>
        `);
    };

    // loop each fruit
    var fruit;
    for(var i = 0; i < fruits.length; i++) {
        fruit = fruits[i];
        // make a fruit template instance
        var dom = render(fruit);

        // append it to the ul
        ul.appendChild(dom);
    }

})(window.module = window.module || {});