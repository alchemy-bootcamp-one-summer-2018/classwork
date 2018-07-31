'use strict';

(function(module) {
    var template = '!';

    function greet(name) {
        return 'hello ' + name + template;
    }

    module.greet = greet;

})(window.module = window.module || {}); // <-- function call happens right here, immediately after function being defined