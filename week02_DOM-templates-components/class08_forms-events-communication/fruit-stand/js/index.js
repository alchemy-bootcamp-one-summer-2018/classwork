'use strict';

(function(module){
    let initFruitForm = module.initFruitForm;
    let addFruit = module.addFruit;

    initFruitForm(function onFruitAdded(fruit) {
        addFruit(fruit);
    });


})(window.module = window.module || {});