'use strict';

(function(module){
    let form = document.getElementById('add-fruit');

    function initFruitForm(onFruitAdded) {

        form.addEventListener('submit', function(event) {
            // #1 Prevent default posting of the form
            event.preventDefault();
    
            // #2 Gather up data
            let elements = form.elements;
    
            let fruit = {
                name: elements.name.value,
                color: elements.color.value,
                image: elements.image.value
            };
    
            // #3 Call action
            onFruitAdded(fruit);
    
            // #4 Process success or failure
        });
    }

    module.initFruitForm = initFruitForm;

})(window.module = window.module || {});