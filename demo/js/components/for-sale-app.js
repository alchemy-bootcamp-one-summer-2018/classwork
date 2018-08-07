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
            <a href="my-items.html">My Items</a>
        </header>

        <main>
            <h2>Items For Sale</h2> 
        </main>
    `;
};

export default class ForSaleApp {


    render() {
        let dom = template(); 
        
        return dom;
    }
}

