// the template helper
import html from '../html.js';
// services component needs to use
import usersApi from '../services/users-api.js';
import User from './user.js';

let template = function() {
    return html`        
        <header>
            <h1>Greg's List</h1>
            <section class="user"></section>
            <a href="for-sale.html">All Items For Sale</a>
        </header>

        <main>
            <h2>My Items For Sale</h2> 
        </main>
    `;
};

export default class MyItemsApp {


    render() {
        let dom = template(); 
        let username = usersApi.getCurrentUser();
        let user = new User({
            username: username
        });
        let userSection = dom.querySelector('section.user');
        userSection.appendChild(user.render());

        return dom;
    }
}

