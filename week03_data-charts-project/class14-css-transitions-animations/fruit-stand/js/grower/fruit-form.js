import html from '../html.js';

let template = function() {
    return html`        
        <section>
            <h3>Add A Fruit</h3>
            <form class="fruit-form">
                <p>
                    <label>
                        Name: <input name="name" required>
                    </label>
                    <label>
                        Color: <input name="color" required>
                    </label>
                    <label>
                        Image: <input name="image" required>
                    </label>
                    <button>Add</button>
                </p>
                <p class="error"></p>
            </form>
        </section>
    `;
};

export default class FruitForm {
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