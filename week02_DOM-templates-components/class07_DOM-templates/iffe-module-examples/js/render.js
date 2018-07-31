'use strict';

(function(module) {
    var greet = module.greet;
    var template = '?';
    
    function render() {
        return '<p>' + greet('person') + '</p>' + template;
    }

    module.render = render;

})(window.module = window.module || {});
