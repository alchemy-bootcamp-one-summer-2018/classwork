import html from '/js/html.js';

let template = function(count) {
    return html`
        <button class="decrement">-</button>
        <span>${count}</span>
        <button class="increment">+</button>
    `;
};

export default class Counter {
    constructor(props) {
        this.count = props.count;
        this.onDecrement = props.onDecrement;
        this.onIncrement = props.onIncrement;
    }

    update(props) {
        this.count = props.count;
        this.countSpan.textContent = this.count;
    }

    render() {
        let dom = template(this.count);
        let decrement = dom.querySelector('button.decrement');
        let increment = dom.querySelector('button.increment');
        this.countSpan = dom.querySelector('span');

        decrement.addEventListener('click', () => {
            this.onDecrement();
        });

        increment.addEventListener('click', () => {
            this.onIncrement();
        });

        return dom;
    }
}