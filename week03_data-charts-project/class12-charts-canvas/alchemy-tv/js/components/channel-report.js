import html from '/js/html.js';

let template = function(channel) {
    let name = channel.name;
    let count = channel.count;

    return html`
        <li>${name} had ${count} views</li>
    `;
};

export default class ChannelReport {
    constructor(props) {
        this.channel = props.channel;
    }

    render() {
        let dom = template(this.channel);
        return dom;
    }
}