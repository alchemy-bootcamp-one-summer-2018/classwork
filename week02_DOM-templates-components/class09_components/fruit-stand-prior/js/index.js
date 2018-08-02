'use strict';

(function(module){
    // this function allows updating the data
    let addFruit = module.addFruit;
    // this function initializes the form so
    // we can give a callback function for when 
    // a submit happens
    let initFruitForm = module.initFruitForm;

    // these two functions allow us to signal to
    // child components they need to update cuz data changed
    let updateCounter = module.updateCounter;
    let updateFruitList = module.updateFruitList;

    // initialize the form so we can orchestrate needed
    // actions and changes
    initFruitForm(function onFruitAdded(fruit) {
        addFruit(fruit);
        updateCounter();
        updateFruitList();
    });


})(window.module = window.module || {});