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

    render() {
        let dom = template();
        let ul = dom.querySelector('ul');

        for(let i = 0; i < this.channels.length; i++) {
            let channel = new Channel({
                channel: this.channels[i], 
                onSelect: this.onSelect
            });
            ul.appendChild(channel.render());
        }

        return dom;
    }
}