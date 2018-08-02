'use strict';

(function(module) {
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
            this.onAdd = props.onAdd;
        }
        
        render() {
            let dom = template(this.fruit);

            let form = dom.querySelector('form');

            form.addEventListener('submit', (event) => {
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
                    // error.textContent = '';
                    this.onAdd(fruit);

                    // #4 Process success or failure
                    // form.reset();
                    // document.activeElement.blur();
                }
                catch(err) {
                    // #4 Process success or failure
                    // error.textContent = err.message;
                }
        
            });

            return dom;
        }
    }

    module.FruitForm = FruitForm;

})(window.module = window.module || {});