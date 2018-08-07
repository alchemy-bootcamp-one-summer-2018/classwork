import html from '/js/html.js';
import Counter from './counter.js';

let template = function() {
    return html`
        <header>
            <h1>Demo Project</h1>
            <div></div>
        </header>

        <main></main>
    `;
};

export default class App {

    constructor() {
        this.count = 0;
    }

    render() {
        let dom = template();

        let appCount = dom.querySelector('div');
        appCount.textContent = this.count;


        let counterProps = {
            count: this.count,
            onDecrement: () => {
                // subtract from count
                this.count--;
                appCount.textContent = this.count;
                let updateProps = {
                    count: this.count
                };
                counter.update(updateProps);
            },
            onIncrement: () => {
                // add to the count
                this.count++;
                appCount.textContent = this.count;
                counter.update({
                    count: this.count
                });
            }
        };

        let counter = new Counter(counterProps);

        let main = dom.querySelector('main');
        main.appendChild(counter.render());
        
        return dom;
    }
}