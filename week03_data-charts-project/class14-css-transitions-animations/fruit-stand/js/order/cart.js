import html from '../html.js';

let template = function() {
    return html`
        <ul class="cart"></ul>
    `;
};

export default class Cart {
    constructor(props) {
        this.lineItems = [];
        let keys = Object.keys(props.order);
        for(let i = 0; i < keys.length; i++) {
            let key = keys[i];
            this.lineItems.push({
                name: key,
                quantity: props.order[key]
            });
        }
    }

    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        
        for(let i = 0; i < this.lineItems.length; i++) {
            let li = document.createElement('li');
            let lineItem = this.lineItems[i];
            li.textContent = `${lineItem.name}: ${lineItem.quantity}`;
            ul.appendChild(li);
        }
        
        return dom;
    }
}