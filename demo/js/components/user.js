import html from '../html.js';

let template = function(username) {
    return html`
        <section>
            <p>
                <span>${username}</span>
                <button>Log Out</button>
            </p>
        </section>
    `;
};

export default class User {
    constructor(props) {
        this.username = props.username;
        this.onLogout = props.onLogout;
    }

    render() {
        let dom = template(this.username);
        let button = dom.querySelector('button');
        button.addEventListener('click', () => {
            this.onLogout();
        });

        return dom;
    }
}