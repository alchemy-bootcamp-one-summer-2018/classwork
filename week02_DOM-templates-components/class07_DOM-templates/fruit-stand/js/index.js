'use strict';

(function(module){
    var fruits = module.fruits;

    // reference the ul
    var ul = document.getElementById('fruits');

    // reference the template
    var template = document.getElementById('fruit-template').content;

    // loop each fruit
    var fruit;
    for(var i = 0; i < fruits.length; i++) {
        fruit = fruits[i];

        // make a "li" that has this fruit's data
        var dom = template.cloneNode(true);

        // set header
        var h2 = dom.querySelector('h2');
        h2.textContent = fruit.name;

        // set img src
        var img = dom.querySelector('img');
        img.src = fruit.image;
        img.alt = fruit.name;

        // set span text and style color
        var span = dom.querySelector('span');
        span.textContent = fruit.color;
        span.style.background = fruit.color;
        
        console.log('doc frag', dom.childNodes.length);
        // append it to the ul
        ul.appendChild(dom);

        console.log('doc frag', dom.childNodes.length);
    }


})(window.module = window.module || {});