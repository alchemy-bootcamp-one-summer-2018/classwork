// the template helper
import html from '../html.js';
// services component needs to use
import usersApi from '../services/users-api.js';
// child components
import LoginForm from './login-form.js';
import User from './user.js';

let template = function() {
    return html`        
        <header>
            <h1>Greg's List</h1>
        </header>

        <main>
            <section class="auth"></section>
            <section>
                <p><a href="for-sale.html">View For Sale Items</a></p>
            </section>
        </main>
    `;
};

export default class App {

    renderLoginOrLogout() {

        while(this.authSection.lastElementChild) {
            this.authSection.lastElementChild.remove();
        }

        let currentUser = usersApi.getCurrentUser();
        if(!currentUser) {
            // show the login form
            let loginForm = new LoginForm({
                onLogin: (username) => {
                    // call the api to update
                    usersApi.setCurrentUser(username);
                    // update self and child components
                    this.renderLoginOrLogout();
                }
            });

            this.authSection.appendChild(loginForm.render());
        }
        else {
            // show username plus logout option
            let user = new User({
                username: currentUser,
                onLogout: () => {
                    usersApi.logout();
                    this.renderLoginOrLogout();
                }
            });

            this.authSection.appendChild(user.render());
        }

    }

    render() {
        let dom = template(); 
        this.authSection = dom.querySelector('section.auth');
        this.renderLoginOrLogout();
        
        return dom;
    }
}

