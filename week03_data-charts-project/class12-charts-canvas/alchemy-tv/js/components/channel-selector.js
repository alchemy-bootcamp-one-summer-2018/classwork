import html from '/js/html.js';
import Channel from './channel.js';

let template = function() {
    return html`
        <ul></ul>
    `;
};

export default class ChannelSelector {
    constructor(props) {
        this.channels = props.channels;
        this.onSelect = props.onSelect;
    }

    update(props) {
        this.channels = props.channels;

        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();
        }

        this.renderList();
    }

    renderList() {
        for(let i = 0; i < this.channels.length; i++) {
            let channel = new Channel({
                channel: this.channels[i], 
                onSelect: this.onSelect
            });
            this.ul.appendChild(channel.render());
        }
    }

    render() {
        let dom = template();
        this.ul = dom.querySelector('ul');

        this.renderList();

        return dom;
    }
}