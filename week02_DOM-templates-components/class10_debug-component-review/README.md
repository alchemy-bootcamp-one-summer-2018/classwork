Class 10 Debugging and Component Review

## Debugging

## Professional Responsibilities

1. Browser DevTools **must** be open when you are developing JavaScript.
    * If console not open, look for the red circle upper right.
1. You need to resolve all error messages _when they appear_. **Do not ignore them**, errors immediately become your top priority.
1. Read the Error. Look at file name, line number of error, and error type

## In The Code

Things to look for and try:

### JavaScript

* Check for linter messages near the source of the error. These should not be allowed to accumulate either.
* Inspect values as the code runs
    1. Set a breakpoint and inspect values with the debugger (preferred)
        * You can also run functions from the console
    1. Console log the value you are trying to work with
        * **Remove the `console.log` when you are done**
    1. Questions to ask:
        * is the value named correctly?
        * is the value defined?
        * is the value the right type?
        * does the object have the props/methods you expect?
        * does the function return the value(s) it should?
        * are you calling the function with the right number/type of arguments?
        * does the array have the number/type of elements you expect?
* Note all of the places in your code that define or modify the value you are working with
* Try commenting things out, then adding them back. work backward until you find the first source of error

### HTML & CSS

Inspect the HTML elements

* do all the elements exist in the HTML?
* is the HTML hierarchy correct?
* does the element actually have an event listener attached?
* does the element have all the attributes you expect?
* have you mixed up a class & an ID?
* did the element match the style you expected?
* is there a specificity issue?

