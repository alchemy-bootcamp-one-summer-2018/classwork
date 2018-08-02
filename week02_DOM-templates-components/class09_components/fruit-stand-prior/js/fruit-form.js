'use strict';

(function(module){
    let form = document.getElementById('add-fruit');
    let error = document.getElementById('form-error');

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
            try {
                error.textContent = '';
                onFruitAdded(fruit);
                // #4 Process success or failure
                form.reset();
                document.activeElement.blur();
            }
            catch(err) {
                // #4 Process success or failure
                error.textContent = err.message;
            }
    
        });
    }

    module.initFruitForm = initFruitForm;

})(window.module = window.module || {});