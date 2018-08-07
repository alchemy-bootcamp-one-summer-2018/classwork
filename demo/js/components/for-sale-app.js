// the template helper
import html from '../html.js';
// services component needs to use
import usersApi from '../services/users-api.js';
import User from './user.js';
import Header from './header.js';

let template = function() {
    return html`        
        <header></header>

        <main>
            <h2>Items For Sale</h2> 
        </main>
    `;
};

export default class ForSaleApp {


    render() {
        let dom = template(); 
        
        let header = dom.querySelector('header');
        let appHeader = new Header();
        header.appendChild(appHeader.render());

        return dom;
    }
}

