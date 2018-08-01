'use strict';

(function(module){
    var form = document.getElementById('add-fruit');
    var error = form.querySelector('p.error');
    var elements = form.elements;

    function initForm(onFruitAdded) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();
    
            var fruit = {
                name: elements.name.value,
                color: elements.color.value,
                image: elements.image.value
            };
    
            try {
                onFruitAdded(fruit);
                form.reset();
            }
            catch(err) {
                error.textContent = err.message;
            }
        });
        
    }

    module.initForm = initForm;

})(window.module = window.module || {});