import greet from './greet.js';

export default function render() {
    return `<p>${greet('person')}</p>`;
}