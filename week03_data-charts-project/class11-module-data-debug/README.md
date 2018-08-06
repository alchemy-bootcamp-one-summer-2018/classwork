Class 11: Data, ES Modules, Debug
===

## Misc, Feedback, Questions, Issues
* ?

## Agenda

1. ES Modules
1. Debugging
1. Storing Data
1. Images, Audio, Video

## ES Modules

### Basics

* Each file is independent scope
* Explicitly `import` from other modules by relative file path
* Explicitly `export` what is exposed to other modules

## Default and Named

While ES Modules support multiple "named" exports (and imports), we are going to stick to a module exporting one main thing, so use `export default`. 

## Debugging

Let's debug while building out data services

* Use Sources tab in Dev Tools
* `CMD/CTRL` + `P` and type in name of file.
* Breakpoints
    * Set breakpoints in the gutter of the file
    * Breakpoints window
    * Conditional breakpoints
* Run code, it stops
    * `CMD/CTRL` + `\` - resume
    * `CMD/CTRL` + `'` - step over
    * `CMD/CTRL` + `;` - step into
    * `CMD/CTRL` + `SHIFT` + `;` - step out of

## Data

Let's use `window.localStorage`!

Create a `load-data.js`

