
## Misc

* W3 Schools vs. MDN vs Stack Overflow, etc.

## Project Organization

* Use `css` and `js` folders!

## JavaScript Modules

* Expression vs Statement
    * Expression - "produces a value"
    * Statement - "performs an action"
        * Assign a variable
        * Control flow: `if`, `for`, `while`
    * Some expressions are statements - "does both"
    * But statements are generally not expressions (you can't use a statement where an expression is expected)
* Function declarations vs. function assignments
* 'use strict'
* Modules...

### Using IIFE for Modules

#### Why?

Top-level variables and functions can "collide" across files

#### What

* IIFE (auto-executing function syntax) to provide scope
* Pass in "module" object
    * Assign variables from module object to "require" or `import`
    * Assign properties with values to "export"
* There is still a file order dependency issue!
* Assigning the module object to `window`
    * Logical operators % short circuiting

#### How

```js
'use strict';

(function(module) {
    var findDuplicates = module.findDuplicates;

    // ...


    module.renderSalesData = render;

}(window.module = window.module || {}));
```

### ES Modules

IIFE _was_ best vanilla (no-build-system) option, but let's look at [ES5 Modules](https://caniuse.com/#feat=es6-module)

Advantages:

* Built-in
* Very clear `import` `from` and `export` syntax
* Cleaner file (no indent just for module system)
* No `use strict` needed!
* Progressive module loading based on entry point!
* Named exports

Need to modify `.eslintrc`:

```json
"parserOptions": {
      "ecmaVersion": 8,
      "sourceType": "module", // add this setting
      ...
```

### Scope...

Introducing `let`! Like `var` but block scoped (not function scoped)

### Entry Point

Use `index.js` to kick things off and run the show!

## The DOM

Document Object Model offers a JavaScript API for creating and manipulating the render items of the browser. It encompasses the `document` _methods_ for getting and creating elements, as well as the `properties` and `methods` on the elements (well technically `nodes`).

Create an element:

* `let content = document.createElement('p')`;

Get element(s):

* `let paragraph = document.querySelector('p')`
* `let paragraphs = document.querySelectorAll('p')`

`querySelector` is supported by all elements, `getElementBy...` is not.

## Templates

There are two main vanilla templating choices:

1. Clone and Use JS to manipulate parts of the clone
    1. Use a `<template>` in the `.html` file 
    1. In JS, get the template by id 
    1. Use `.cloneNode(true)` if you need more than one copy
    1. Use `.querySelector` to target each thing that needs to be updated
    1. Set `.textContent = ` or other element properties (`classList`, `style`, `disabled`, etc.)
1. Use template literals
    1. Write template in JS as function
    1. Call function with data
    1. Use a function that converts string to DOM
    1. (You may still need to do 4 and 5 from #1)
    1. Requires two new JS constructs

Pragmatically, Use #2, but use #1 for targeted updates

## Template Literals

```js

let template = function(name) {
    return `hello ${name}`;
}

```

1. Use backticks: **`** not quotes!
1. Can have multiple lines, do not need to escape newline and tab
1. Use `${<expr>}` to put JS in!

## Demo 

Fruit Stand