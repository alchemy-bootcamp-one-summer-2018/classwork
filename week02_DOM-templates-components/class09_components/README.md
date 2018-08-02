Class 09: Components
===

## Misc, Feedback, Questions, Issues
* ?

## Classes

**Always** named in `TitleCase`

### Use

* In modern JavaScript, we don't generally use classes to do "domain modelling" (the data).
* We do use classes as utilities and tools to do specific jobs.
* We use POJOs (Plain Old JavaScript Objects) to represent data

For Bootcamp I, we aren't going into low-level details of:

* Prototypical Inheritance
* Extending Classes (Polymorphism)

These are covered in Career Track

### What Are They Good For

Classes allow us to:
* Group a set of functions (methods) callable over time
* Around a specific set of data common to all functions
* In a repeatable way (we can make "more than one")

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

When we use callback functions inside of classes, we
may lose the `this` context inside our callbacks. The solution
is Arrows Functions

Compare to `function`

```js
function(x) {
    return x + 5;
}
```

_becomes_

```js
(x) => {
     return x + 5;
}
```

Remove `function` keyword and put `=>` between parameters and function block.

Rule for now:
* Use arrow functions anytime you are passing a function to another function (callbacks)!

## Update `html`

Update our help function to only need one call

## Project Organization

* Use a `component` folder under `js`
* For full app, all Html (except root) moves into components, _not_ `index.html`
* `App` is your top level component.
* `index.js` creates `App`, calls render, and appends to DOM target

## Component Architectures

[Details](vanillajs-components.md)

## Where to Start

Start with getting your `App` component rendering with `<h1>Hello World</h1>`

There are multiple ways to build out a component hierarchy. Again, the core principal _must_ be to incremental add things while checking validity.

Some splitting techniques:

1. Build the static presentation of a component first, then extract the props
1. Build the child component before the list component that uses it
1. Use `console.log` when wiring up events. Start close to the source and
    1. Move upwards
    1. Into API

## Debugging

Open specific files in Sources with `CMD` + `P` and type file name. 

## Storing Data

### Local Storage

* Persist the data in the browser via `window.localStorage`
* Save via `beforeunload` event on `window`

### JSON

Objects (and Arrays) must be converted to a string format to be stored. Likewise, they must be converted from a string back to their object format

* Serialization via `let json = JSON.stringify(obj)`
* Deserialization via `let obj = JSON.parse(json)`