import html from '/js/html.js';
import ChannelReport from './channel-report.js';
import ChannelChart from './channel-chart.js';

let template = function() {
    return html`
        <h2>Report</h2>
        <ul></ul>
        <section></section>
    `;
};

export default class Report {
    constructor(props) {
        this.results = props.results;
    }

    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        
        for(let i = 0; i < this.results.length; i++) {
            let channelReport = new ChannelReport({
                channel: this.results[i]
            });
            ul.appendChild(channelReport.render());
        }

        let section = dom.querySelector('section');
        let channelChart = new ChannelChart({
            results: this.results
        });
        section.appendChild(channelChart.render());

        return dom;
    }
}