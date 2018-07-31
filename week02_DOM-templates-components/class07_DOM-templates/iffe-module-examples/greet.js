'use strict';
(function(module) {
    
    module.greet = function(name) {
        return `hello ${name}`;
    };

}(window.module = window.module || {}));