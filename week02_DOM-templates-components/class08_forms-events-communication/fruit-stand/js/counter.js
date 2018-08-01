'use strict';

(function(module){
    var fruits = module.fruits;
    var countSpan = document.getElementById('fruit-count');
    
    function updateCounter() {
        countSpan.textContent = fruits.length;
    }

    updateCounter();

    module.updateCounter = updateCounter;

})(window.module = window.module || {});