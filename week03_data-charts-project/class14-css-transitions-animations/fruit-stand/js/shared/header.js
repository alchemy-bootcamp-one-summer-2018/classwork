import html from '../html.js';

let template = function() {
    return html`
        <h1>Alchemy Fruit Stand</h1>
        <nav>
            <ul>
                <li>
                    <a href="order.html">Order</a>
                </li>
                <li>
                    <a href="index.html">Grower</a>
                </li>
            </ul>
        </nav>
    `;
};

export default class Header {
    render() {
        let dom = template();
        return dom;
    }
}