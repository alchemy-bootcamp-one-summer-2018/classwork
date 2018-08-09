import html from '../html.js';
import User from './user.js';

let template = function() {
    return html`
        <h1>Greg's List</h1>
        <section></section>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="for-sale.html">For Sale</a></li>
                <li><a href="my-items.html">My Items</a></li>
            </ul>
        </nav>
    `;
};

export default class Header {
    constructor(props) {
        this.username = props.username;
        this.onLogout = props.onLogout;
    }

    update(props) {
        if(props.username !== this.username) {
            this.username = props.username;
            while(this.userSection.firstChild) {
                this.userSection.firstChild.remove();
            }
            this.renderUser();
        }
    }

    renderUser() {
        if(this.username) {
            let user = new User({
                username: this.username,
                onLogout: this.onLogout
            });
    
            this.userSection.appendChild(user.render());
        }
    }

    render() {
        let dom = template();
        this.userSection = dom.querySelector('section');
        // this.renderUser();
        return dom;
    }
}