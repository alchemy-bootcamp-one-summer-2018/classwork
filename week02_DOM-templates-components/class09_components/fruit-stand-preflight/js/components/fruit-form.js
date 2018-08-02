'use strict';
(function(module){
    
    let html = module.html;
 
    let template = function() {
        return html`        
            <section>
                <h2>Add A Fruit</h2>
                <form>
                    <p>* is required</p>
                    <p>
                        <label>
                            Name:
                            <input name="name" required><sup>*</sup>
                        </label>
                    </p>

                    <p>
                        <label>
                            Color:
                            <input name="color" required><sup>*</sup>
                        </label>
                    </p>

                    <p>
                        <label>
                            Image:
                            <input name="image" required><sup>*</sup>
                        </label>
                    </p>

                    <p>
                        <button>Add</button>
                    </p>

                    <p class="error"></p>
                        
                </form>
            </section>
        `;
    };

    class FruitForm {
        constructor(props) {
            this.onFruitAdd = props.onAdd;
        }

        render() {
            let dom = template();
            let form = dom.querySelector('form');
            let elements = form.elements;
            let error = dom.querySelector('p.error');
            
            form.addEventListener('submit', (event) => {
                event.preventDefault();
        
                let fruit = {
                    name: elements.name.value,
                    color: elements.color.value,
                    image: elements.image.value
                };
        
                try {
                    error.textContent = '';
                    this.onFruitAdd(fruit);
                    form.reset();
                    document.activeElement.blur();
                }
                catch(err) {
                    error.textContent = err.message;
                }
            });
    
            return dom;
        }
    }

    module.FruitForm = FruitForm;

})(window.module = window.module || {});