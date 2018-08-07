# Class 12: Charts and Canvas

## Questions, Review, Misc
* ?

## Data Structure Review

* Objects
    * Properties
* Arrays
    * Indexes
* Passing Object Literals as "props"
* Arrays of Objects
* Objects (Dictionary) of Objects

## Process

### User Stories

What are the points of value from a users and/or business perspective?

### Design

1. Draw app (or page of app)
    1. Break visually into components
1. Draw tree of components
1. State
    1. List of things that change
    1. What is derived
1. Events and Actions
    1. What triggers state changes
    1. What action, meaning name of changes
1. Data (State) and Flow
    1. Start with listing out what component needs what state
    1. Lift state when shared to common ancestor

### Technical Tasks

1. Start with one story
1. Break into first task that you can code and validate
1. Repeat above until story is complete
1. Repeat until all stories are complete

### Technical Architecture

* Old way: html is rendered and JavaScript attaches and wires up
* New way: JavaScript in control and uses a tree of components to create the UI

### Details

1. Template function for initial render
1. Pass state and "event" handlers to `constructor`
1. Return DOM from `render`
    1. Clone template
    1. Integrate data (state) with elements
    1. Register event listeners
    1. Store in elements you need to update on `this`
    1. If need for both render and update, put in own method
1. Create `update` methods for data that will need to be updated
    1. Consolidate common render/update logic
