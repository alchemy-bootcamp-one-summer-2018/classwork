import html from '../html.js';

let template = function() {
    return html`
        <section>
            &copy; 2018 Alchemy Fruit Stand
        </section>
    `;
};

export default class Footer {
    render() {
        let dom = template();
        return dom;
    }
}