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

### Arrow Functions

Maintaining `this` context:

* Use arrow functions for callbacks!

## Components

### Component Classes

* `constructor` should receive object with a property for each:
    * Needed data
    * Callback function `onEvent`
* `render` method
    * Called once for initial render
    * Uses template function
    * Child content
        * Creates child components
        * Calls their `render` methods
        * Append to place in DOM
        * (Don't use template literal!)
    * Needs to return `dom` of component
    * Store things you need later on `this`
* `update` method
    * Receives new data corresponding to data received in
    constructor
    * Conditionally checks for property changes and makes changes
    * Delegate to other methods if there are many possible updates

### Update `html`

Update our help function to only need one call

### `index.js` and App Component

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