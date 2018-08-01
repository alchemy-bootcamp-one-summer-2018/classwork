'use strict';

(function(module){
    var initForm = module.initForm;
    var addFruit = module.addFruit;
    var updateFruitList = module.updateFruitList;
    var updateCounter = module.updateCounter;

    initForm(function(fruit) {
        addFruit(fruit);
        updateFruitList();
        updateCounter();
    });

})(window.module = window.module || {});