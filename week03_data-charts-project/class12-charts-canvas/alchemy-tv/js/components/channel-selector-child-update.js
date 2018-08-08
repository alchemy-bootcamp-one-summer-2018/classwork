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
        this.childChannels = [];
    }

    update(props) {
        this.channels = props.channels;
        for(let i = 0; i < this.childChannels; i++) {
            this.childChannels[i].update({
                channel: this.channels[i]
            });
        }
    }

    render() {
        let dom = template();
        this.ul = dom.querySelector('ul');

        for(let i = 0; i < this.channels.length; i++) {
            let channel = new Channel({
                channel: this.channels[i], 
                onSelect: this.onSelect
            });
            this.childChannels.push(channel);
            this.ul.appendChild(channel.render());
        }

        return dom;
    }
}