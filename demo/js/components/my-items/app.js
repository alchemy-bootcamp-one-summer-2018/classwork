// the template helper
import html from '../../html.js';
// services component needs to use
import usersApi from '../../services/users-api.js';
import User from '../user.js';
import Header from '../header.js';

let template = function() {
    return html`        
        <header></header>

        <main>
            <h2>My Items For Sale</h2> 
        </main>
    `;
};

export default class MyItemsApp {


    render() {
        let dom = template(); 

        let header = dom.querySelector('header');
        let appHeader = new Header({});
        header.appendChild(appHeader.render());

        // let username = usersApi.getCurrentUser();
        // let user = new User({
        //     username: username
        // });
        // let userSection = dom.querySelector('section.user');
        // userSection.appendChild(user.render());

        return dom;
    }
}

