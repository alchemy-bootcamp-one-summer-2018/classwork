Class 09: Components
===

## Misc, Feedback, Questions, Issues
* ?

## Classes

**Always** named in `TitleCase`

### Syntax

Definition:

* `class` keyword
* `constructor` method does _initialization_
* Use `this` to refer to the **instance**
* Add methods. Use `this` to share data

Constructing (Make):

* Use the `new` keyword plus the `ClassName` plus `()`:

```js
let app = new App();
```

### Constructor Functions

In the beginning...

We create classes as functions. Uphill. Both ways.

## Arrow Functions

Maintaining `this` context:

* Use arrow functions anytime you are passing a function to another function (callbacks)! 

## Update `html`

Update our help function to only need one call

## `index.js` and App Component

* All Html (except root) moves into components
* `App` is your top level component.
* `index.js` creates `App`, calls render, and appends to DOM target

## Debugging

Open specific files in Sources with `CMD` + `P` and type file name. 

## Local Storage

* Persist the data in the browser via `window.localStorage`
* Save via `beforeunload` event on `window`

## JSON

* Serialization via `JSON.stringify()`
* Deserialization via `JSON.parse()`