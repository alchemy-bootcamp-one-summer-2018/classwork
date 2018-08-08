import html from '/js/html.js';

let template = function(name) {
    return html`
        <li class="channel">
            <h3>${name}</h3>
        </li>
    `;
};

export default class Channel {
    constructor(props) {
        this.channel = props.channel;
        this.onSelect = props.onSelect;
    }

    update(props) {
        this.channel = props.channel;
        this.h3.textContent = this.channel.name;
    }

    render() {
        let dom = template(this.channel.name);
        this.h3 = dom.querySelector('h2');

        let li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.channel);
        });
        
        return dom;
    }
}