
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