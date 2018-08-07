import html from '/js/html.js';
import channelsApi from '../services/channels-api.js';
import VideoViewer from './video-viewer.js';
import ChannelSelector from './channel-selector.js';
import Report from './report.js';

let template = function() {
    return html`
        <header>
            <h1>Alchemy TV</h1>
        </header>

        <main>
            <section class="video-viewer"></section>
            <section class="channel-selector"></section>
            <section class="report"></section>
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

        let reportSection = dom.querySelector('.report');

        let firstChannel = this.channels[0];
        
        let viewer = new VideoViewer({
            channel: firstChannel
        });

        let viewerSection = dom.querySelector('.video-viewer');
        viewerSection.appendChild(viewer.render());

        let selectorProps = {
            channels: this.channels,
            onSelect: (channel) => {
                channel.count++;
                this.totalCount++;

                if(this.totalCount > 3) {
                    // time to show results
                    let report = new Report({
                        results: this.channels
                    });
                    viewerSection.style.display = 'none';
                    selectorSection.style.display = 'none';
                    reportSection.appendChild(report.render());
                }
                else {
                    viewer.update({
                        channel: channel
                    });
                }
            }
        };

        let selector = new ChannelSelector(selectorProps);

        let selectorSection = dom.querySelector('.channel-selector');
        selectorSection.appendChild(selector.render());


        return dom;
    }
}