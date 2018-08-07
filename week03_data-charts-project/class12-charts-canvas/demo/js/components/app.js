import html from '/js/html.js';
import channelsApi from '../services/channels-api.js';
import VideoViewer from './video-viewer.js';
import ChannelSelector from './channel-selector.js';

let template = function() {
    return html`
        <header>
            <h1>Alchemy TV</h1>
        </header>

        <main>
            <section class="video-viewer"></section>
            <section class="channel-selector"></section>
        </main>
    `;
};

export default class App {
    constructor() {
        this.channels = channelsApi.get();
        this.totalCount = 0;
    }

    render() {
        let dom = template();

        const firstChannel = this.channels[0];
        firstChannel.count++;
        
        let viewer = new VideoViewer({
            channel: firstChannel
        });
        let viewerSection = dom.querySelector('.video-viewer');
        viewerSection.appendChild(viewer.render());

        let selector = new ChannelSelector({
            channels: this.channels,
            onSelect: (channel) => {
                channel.count++;
                viewer.update(channel);
            }
        });
        let selectorSection = dom.querySelector('.channel-selector');
        selectorSection.appendChild(selector.render());


        return dom;
    }
}