'use strict';

(function(module){
    let initFruitForm = module.initFruitForm;
    initFruitForm(function onFruitAdded(fruit) {
        alert('you added\n\n' + JSON.stringify(fruit, true, 2));
    });
    
})(window.module = window.module || {});