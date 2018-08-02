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

    function html(strings, ...values) {
        // use the built in JavaScript function for 
        // template literals
        let htmlString = String.raw(strings, ...values);
        // now call convert string to DOM...
        return toDOM(htmlString);
    }

    module.html = html;

})(window.module = window.module || {});