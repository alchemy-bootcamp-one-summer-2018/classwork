import html from '../html.js';

let template = function() {
    return html`
        <form>

            <input name="username" required>
            <button>Sign In</button>
        </form>
    `;
};

export default class LoginForm {
    constructor(props) {
        this.onLogin = props.onLogin;
    }

    render() {
        let dom = template();
        let form = dom.querySelector('form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let username = form.elements.username.value;
            this.onLogin(username);
        });

        return dom;
    }
}