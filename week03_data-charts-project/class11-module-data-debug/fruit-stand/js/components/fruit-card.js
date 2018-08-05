import html from '../html.js';

let template = function(fruit) {
    return html`        
        <li>
            <h3>${fruit.name}</h3>
            <img src="images/${fruit.image}" alt="${fruit.name}">
            <span class="color-name" 
                style="background: ${fruit.color}">
                ${fruit.color}
            </span>
            <button class="remove-btn">ⓧ</button>
        </li>
    `;
};

export default class FruitCard {
    constructor(props) {
        this.fruit = props.fruit;
        this.onRemove = props.onRemove;
        this.selected = props.selected;
        this.onSelect = props.onSelect;
    }

    update(props) {
        if(props.selected !== this.selected) {
            this.selected = props.selected;
            this.updateSelected(this.selected === this.fruit);
        }
    }

    updateSelected(isSelected) {
        let classList = this.li.classList;
        if(isSelected) {
            classList.add('selected');
        }
        else {
            classList.remove('selected');
        }
    }

    render() {
        let dom = template(this.fruit);
        this.li = dom.querySelector('li');
        let removeButton = dom.querySelector('button');
        
        this.li.addEventListener('click', () => {
            this.onSelect(this.fruit);
        });

        removeButton.addEventListener('click', () => {
            this.onRemove(this.fruit);
        });

        return dom;
    }
}