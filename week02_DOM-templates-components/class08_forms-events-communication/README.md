DOM Events and Form Validation plus Communication
===

## Misc, Feedback, Questions, Issues
* ?

## Lets use `let`

`let` is blocked scope

## DOM events

### Subscribing

* Old-school simple: `.onevent = handler`
* "Idiomatic": `element.addEventListener('event', handler)`

### Types

* Keyboard
  * When
  * Special Keys
* Mouse
  * `click` and `double-click`
  * `move`
* Touch
  * "Translated" to `click`
  * Unique gestures: `swipe`, `pinch`
  * Multiple "touches"
* Wheel, pointer, etc.
* Other specific events...
  * `onhashchange` (Router)

### Event Handlers

* `event` parameter
* Default Behavior
  * `.preventDefault()`
* Capture/direction
  * `.stopPropagation()`
* Getting to elements
  * ~`this` in event handlers~
  * `event.src`
  * `event.target`
* Delegation

## Form Validation

* Pre vs Post

### Constraint Validation (html markup)

* `required`
* `type`
* `min` and `max`
* `minlength` and `maxlength`
* regex with `pattern`

### Post Validation With JavaScript

#### Why?

1. Timing - validation does not occur until submit
2. Error Message - at the whim of the browser, may be very general
3. Validation - thing you want to validate isn't part of HTML Forms Validation

Also possible to engage the Form Validation API, but beyond the scope of this course...

#### Options

* force reporting of validation
  * Pro: fail earlier
  * Con: traps user
* Custom messages
  * `title` and `pattern`

#### Styling

* `:valid` and `:invalid`

#### Post-Submit Validation

1. Prevent Default
1. Format Data
1. Call Action
1. Respond to Success or Error
    * Success - clear form
    * Error - tell user

## Intra "Component" Communication

Challenges:

* `Form` and `List` are siblings, so how does `Form` tell `List` to update?
* How does `List` need to change to handle updating?
