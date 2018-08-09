// the template helper
import html from '../../html.js';
// services component needs to use
import usersApi from '../../services/users-api.js';
// child components
import Header from '../header.js';
import LoginForm from './login-form.js';

let template = function() {
    return html`        
        <header></header>

        <main>
            <section class="auth"></section>
            <section>
                <p><a href="for-sale.html">View For Sale Items</a></p>
            </section>
        </main>
    `;
};

export default class App {

    renderAuth() {
        let currentUser = usersApi.getCurrentUser();

        this.appHeader.update({
            username: currentUser
        });

        while(this.authSection.lastElementChild) {
            this.authSection.lastElementChild.remove();
        }

        if(!currentUser) {
            let loginForm = new LoginForm({
                onLogin: (username) => {
                    usersApi.setCurrentUser(username);
                    this.renderAuth();
                }
            });

            this.authSection.appendChild(loginForm.render());
        }
    }

    render() {
        let dom = template(); 

        let currentUser = usersApi.getCurrentUser();
        this.authSection = dom.querySelector('section.auth');
        let header = dom.querySelector('header');

        this.appHeader = new Header({
            username: currentUser,
            onLogout: () => {
                usersApi.logout();
                this.renderAuth();
            }
        });

        header.appendChild(this.appHeader.render());

        this.renderAuth();
        
        return dom;
    }
}

