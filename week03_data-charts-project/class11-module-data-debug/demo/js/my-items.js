import MyItemsApp from './components/my-items-app.js';

let root = document.getElementById('root');
let app = new MyItemsApp();
root.appendChild(app.render());
