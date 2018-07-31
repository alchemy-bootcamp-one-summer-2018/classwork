import greet from './greet.js';

var template = '!';

export default function render() {
    return '<p>' + greet('person') + '</p>' + template;
}
