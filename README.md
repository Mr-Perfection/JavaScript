# Welcome to my JavaScript Repo!

"Do. Or do not. There is no try"

**Learn JavaScript with my notes, applications, and demos.**

## JavaScriptES6
Cheatsheet for new JS version (introduction of new functionalities)

## Webpack
Replace Gulp/Grunt plugins with a single tool

## ReactJS
This React JS will help you get quickly up to pace with React.js development. React is an AMAZING Javascript framework that allows you to build extremely stable applications that are very easy to change and modify as the application changes and grows over time.
React is an AMAZING Javascript library (some argue, is a framework) that allows you to build extremely stable applications that are very easy to change and modify as the application changes and grows over time. I will be building several front-end applications in React to learn more about React.js. My ultimate goal is to build a React Native app for mobile platforms.


## React-Native
Check out my [React-Native Repo](ReactNative)



## Thinking in React
React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.

One of the many great parts of React is how it makes you think about apps as you build them.

### Step 1: Start with A Mock
1. Create a fake JSON data and a mockup.

### Step 2: Break the UI into a Component Hierarchy
1. Draw boxes around every component (and subcomponent) in the mock and give them all names. Every component should ideally do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

![alt text](https://facebook.github.io/react/img/blog/thinking-in-react-components.png)

### Step 3: Build A Static Version in React
1. The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It's best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing.

2. To build a static version of your app that renders your data model, you'll want to build components that reuse other components and pass data using props. props are a way of passing data from parent to child. If you're familiar with the concept of state, don't use state at all to build this static version. **State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don't need it.**

3. You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy or with the ones lower in it. In simpler examples, **it's usually easier to go top-down, and on larger projects, it's easier to go bottom-up and write tests as you build.**

4. . It's easy to see how your UI is updated and where to make changes since there's nothing complicated going on. React's one-way data flow (also called **one-way binding**) keeps everything modular and fast.

### Step 4:  Identify The Minimal (but complete) Representation Of UI State
1. To make your UI interactive, you need to be able to trigger changes to your underlying data model. React makes this easy with state.

2. think of the minimal set of mutable state that your app needs. The key here is DRY: Don't Repeat Yourself. Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand

3. Ask three questions for each piece of data:
- Is it passed in from a parent via props? If so, it probably isn't state.
- Does it remain unchanged over time? If so, it probably isn't state.
- Can you compute it based on any other state or props in your component? If so, it isn't state.

### Step 5: Identify Where Your State Should Live
1. For each piece of state in your application:
- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.


## MVC and flux are similar concepts
```
                 _________               ____________               ___________
                |         |             |            |             |           |
                | Action  |------------▶| Dispatcher |------------▶| callbacks |
                |_________|             |____________|             |___________|
                     ▲                                                   |
                     |                                                   |
                     |                                                   |
 _________       ____|_____                                          ____▼____
|         |◀----|  Action  |                                        |         |
| Web API |     | Creators |                                        |  Store  |
|_________|----▶|__________|                                        |_________|
                     ▲                                                   |
                     |                                                   |
                 ____|________           ____________                ____▼____
                |   User       |         |   React   |              | Change  |
                | interactions |◀--------|   Views   |◀-------------| events  |
                |______________|         |___________|              |_________|


```
- Models look like stores
- user events, data modifications and their handlers look like "action creators" -> action -> dispatcher -> callback
- Views look like React views (or anything else as far as flux is concerned)

### Action Creator

```js
var actionCreator = function() {
    // ...that creates an action (yeah, the name action creator is pretty obvious now) and returns it
    return {
        type: 'AN_ACTION'
    }
}
//This is kind of a convention in flux
// that the action is an object that contains a "type" property. This type allows for further
// handling of the action. Of course, the action can also contain other properties to
// pass any data you want.
//the action creator can actually return something other than an action,
// like a function
```

### State
1. Where do I keep all the data regarding my application along its lifetime?
You keep it the way you want (JS object, array, Immutable structure, ...). Data of your application will be called **state**.
2. How do I handle data modifications?
Using reducers (called "stores" in traditional flux).
A reducer is a subscriber to actions. A reducer is just a function that receives the current state of your application, the action,
and returns a new state modified (or reduced as they call it).
A reducer is just a function that receives the current state of your application, the action, and returns a new state modified (or reduced as they call it)
3. How do I propagate modifications to all parts of my application?
Using subscribers to state's modifications.
4. How do we retrieve the state from our Redux instance?
```js
import { createStore } from 'redux'

var reducer_0 = function (state, action) {
    console.log('reducer_0 was called with state', state, 'and action', action)
}

var store_0 = createStore(reducer_0)
// Output: reducer_0 was called with state undefined and action { type: '@@redux/INIT' }

// To get the state that Redux is holding for us, you call getState
console.log('store_0 state after initialization:', store_0.getState())
// Output: store_0 state after initialization: undefined

// So the state of our application is still undefined after the initialization? Well of course it is,
// our reducer is not doing anything.
//     "A reducer is just a function that receives the current state of your application, the action,
//     and returns a new state modified (or reduced as they call it)"
// Our reducer is not returning anything right now so the state of our application is what
// reducer() returns, hence "undefined".

var reducer_1 = function (state, action) {
    console.log('reducer_1 was called with state', state, 'and action', action)
    if (typeof state === 'undefined') {
        return {}
    }

    return state;
}

var store_1 = createStore(reducer_1)
// Output: reducer_1 was called with state undefined and action { type: '@@redux/INIT' }

console.log('store_1 state after initialization:', store_1.getState())
// Output: store_1 state after initialization: {}

// better version!
var reducer_3 = function (state = {}, action) {
    console.log('reducer_3 was called with state', state, 'and action', action)

    switch (action.type) {
        case 'SAY_SOMETHING':
            return {
                ...state,
                message: action.value
            }
        default:
            return state;
    }
}

var store_3 = createStore(reducer_3)
// Output: reducer_3 was called with state {} and action { type: '@@redux/INIT' }

console.log('store_3 state after initialization:', store_3.getState())
// Output: store_3 state after initialization: {}
```

### Redux
Redux ties all this together for you.
1. a place to put your application state
2. a mechanism to dispatch actions to modifiers of your application state, AKA reducers
3. a mechanism to subscribe to state updates

```js
import { createStore } from 'redux'
// createStore expects a function that will allow it to reduce your state.
var store = createStore(() => {})

var reducer = function (...args) {
    console.log('Reducer was called with args', args)
}
var store_1 = createStore(reducer) //output: Reducer was called with args [ undefined, { type: '@@redux/INIT' } ]

```

### Combine Reducers
```js
// Let's declare 2 reducers

var userReducer = function (state = {}, action) {
    console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        default:
            return state;
    }
}
var itemsReducer = function (state = [], action) {
    console.log('itemsReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        default:
            return state;
    }
}
var nameReducer = function(state = [], action) {
  console.log('nameReducer was called with state', state, 'and action', action)

  switch (action.type) {
    case 'full_name':
      return state.join(' ');
    default:
      return state;

  }
}

// I'd like you to pay special attention to the initial state that was actually given to
// each reducer: userReducer got an initial state in the form of a literal object ({}) while
// itemsReducer got an initial state in the form of an array ([]). This is just to
// make clear that a reducer can actually handle any type of data structure. It's really
// up to you to decide which data structure suits your needs (an object literal, an array,
// a boolean, a string, an immutable structure, ...).

// So how do we combine our reducers? And how do we tell Redux that each reducer will only handle
// a slice of our state?

import { createStore, combineReducers } from 'redux'

var reducer = combineReducers({
    user: userReducer,
    items: itemsReducer
})

var store_0 = createStore(reducer)
// Output:
// userReducer was called with state {} and action { type: '@@redux/INIT' }
// itemsReducer was called with state [] and action { type: '@@redux/INIT' }

console.log('store_0 state after initialization:', store_0.getState())
// Output:
// store_0 state after initialization: { user: {}, items: [] }
```
### Dispatch an Action
```js

store_0.dispatch({
    type: 'AN_ACTION'
})
// Output:
// userReducer was called with state {} and action { type: 'AN_ACTION' }
// itemsReducer was called with state [] and action { type: 'AN_ACTION' }

var setNameActionCreator = function (name) {
    return {
        type: 'SET_NAME',
        name: name
    }
}

store_0.dispatch(setNameActionCreator('bob'))
// Output:
// userReducer was called with state {} and action { type: 'SET_NAME', name: 'bob' }
// itemsReducer was called with state [] and action { type: 'SET_NAME', name: 'bob' }

console.log('store_0 state after action SET_NAME:', store_0.getState())
// Output:
// store_0 state after action SET_NAME: { user: { name: 'bob' }, items: [] }

```

### Dispatch Async. Action
Let's now imagine a simple asynchronous use-case:
1. user clicks on button "Say Hi in 2 seconds"
2. When button "A" is clicked, we'd like to show message "Hi" after 2 seconds have elapsed
3. 2 seconds later, our view is updated with the message "Hi"

```js
// Of course this message is part of our application state so we have to save it
// in Redux store. But what we want is to have our store save the message
// only 2 seconds after the action creator is called (because if we were to update our state
// immediately, any subscriber to state's modifications - like our view - would be notified right away
// and would then react to this update 2 seconds too soon).

import { createStore, combineReducers } from 'redux';

var reducer = combineReducers({
    speaker: function(state = {}, action) {
      console.log('speaker was called with state', state, 'and action', action);

      switch (action.type) {
        case 'SAY':
          return {
            ...state,
            message: action.message
          }
        default:
          return state;
      }
    } //speaker
});

var store_0 = createStore(reducer);

var sayActionCreator = function(message) {
    return {
      type: 'SAY',
      message
    }
}

store_0.dispatch(sayActionCreator('Hi'));
console.log('store_0 state after action SAY:', store_0.getState())
// Output (skipping initialization output):
//     Sun Aug 02 2015 01:03:05 GMT+0200 (CEST)
//     speaker was called with state {} and action { type: 'SAY', message: 'Hi' }
//     Sun Aug 02 2015 01:03:05 GMT+0200 (CEST)
//     store_0 state after action SAY: { speaker: { message: 'Hi' } }

var asyncSayActionCreator_0 = function (message) {
    setTimeout(function () {
        return {
            type: 'SAY',
            message
        }
    }, 2000)
}
// But then our action creator would not return an action, it would return "undefined".

var asyncSayActionCreator_1 = function (message) {
    return function(dispatch) {
      setTimeout(function() {
        dispatch({
          type: 'SAY',
          message
        })
      }, 2000);
    }
}
// Again you'll notice that our action creator is not returning an action, it is returning a function.
// So there is a high chance that our reducers won't know what to do with it.

console.log("\n", 'Running our async action creator:', "\n")
store_0.dispatch(asyncSayActionCreator_1('Hi'))

// Output:
//     ...
//     /Users/classtar/Codes/redux-tutorial/node_modules/redux/node_modules/invariant/invariant.js:51
//         throw error;
//               ^
//     Error: Invariant Violation: Actions must be plain objects. Use custom middleware for async actions.
//     ...
// Thanks Redux for the hint! We gotta set up middleware
```

### Middleware
Middleware is one that connects between point A and B of an application to transform what A sends before passing it to B.

```
Instead of
A ---> B
A ---> middleware 1 ---> middleware 2 ... ---> B

action ---> dispatcher ---> middleware 1 ---> middleware 2 ---> reducers

// Our middleware will be called each time an action (or whatever else, like a function in our
// async action creator case) is dispatched and it should be able to help our action creator
// dispatch the real action when it wants to (or do nothing - this is a totally valid and
// sometimes desired behavior).

```
```js
let anyMiddleware = function( { dispatch, getState} ) {
  return function (next) {
    return function (action) {
      // your middleware-specific code goes here.
    }
  }
};
```
As you can see the code above, a middleware is made up of *3 nested functions* called sequentially:
1. The first level provides the `dispatch` function and a `getState` function (if your middleware or your action creator needs to read data from state) to the 2 other levels
2. The second level provides the `next` function that will allow you to explicitly hand over your transformed input to the next middleware or to Redux (so that Redux can finally call all reducers).
3. The third level provides the action received from the previous middleware or from your dispatch and can either trigger the next middleware or process action.

Use **Redux Thunk** and `curry` function to simplify the code above.
```js
// The middleware we have to build for our async action creator is called a thunk middleware and
// its code is provided here: https://github.com/gaearon/redux-thunk.

let thunkMiddleware = function( {dispatch, getState} ){
  return function(next) {
    return function(action) {
      return typeof action === 'function' ? action(dispatch, getState) : next(action);
    }
  }
}

// "curry" may come from any functional programming library (lodash, ramda, etc.)
let thunkMiddleware = curry(
  ( {dispatch, getState}, next, action ) => (
    return typeof(action) === 'function' ? action(dispatch, getState) : next(action)
  )
);
```
To tell Redux that we have one or more middlewares, we must use one of Redux's helper functions: `applyMiddleware`


## References
http://www.youhavetolearncomputers.com/blog/2015/9/15/a-conceptual-overview-of-redux-or-how-i-fell-in-love-with-a-javascript-state-container # great starter guide!

https://babeljs.io/repl #great to check JSX with JS

https://atom.io/packages/javascript-snippets #for hotkeys

https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw #great React.js videos

https://www.youtube.com/watch?v=xsSnOQynTHs # Must watch for the beginner #1: video by a guy who made Redux

https://github.com/happypoulp/redux-tutorial # Great tutorial for starters
