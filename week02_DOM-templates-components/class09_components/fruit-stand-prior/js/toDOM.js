'use strict';

(function(module){
    
    function toDOM(html) {
        // create a template element
        var template = document.createElement('template');
        // set it's html prop, which has effect of 
        // browser turing html into DOM
        template.innerHTML = html;
        // use the "content" property to get the DOM
        return template.content;
    }

    module.toDOM = toDOM;
    module.html = String.raw;

})(window.module = window.module || {});