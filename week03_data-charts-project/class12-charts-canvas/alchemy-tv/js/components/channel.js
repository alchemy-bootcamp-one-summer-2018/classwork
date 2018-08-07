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

    render() {
        let dom = template(this.channel.name);
        
        let li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.channel);
        });
        
        return dom;
    }
}