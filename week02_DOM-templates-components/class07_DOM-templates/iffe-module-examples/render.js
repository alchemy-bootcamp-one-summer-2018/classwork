'use strict';
(function(module) {
    
    var greet = module.greet;

    function render() {
        return `<p>${greet('person')}</p>`;
    }

    module.render = render;

}(window.module = window.module || {}));