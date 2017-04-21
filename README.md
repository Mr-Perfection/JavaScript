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

- Models look like stores
- user events, data modifications and their handlers look like "action creators" -> action -> dispatcher -> callback
- Views look like React views (or anything else as far as flux is concerned)

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
## References
http://www.youhavetolearncomputers.com/blog/2015/9/15/a-conceptual-overview-of-redux-or-how-i-fell-in-love-with-a-javascript-state-container # great starter guide!

https://babeljs.io/repl #great to check JSX with JS

https://atom.io/packages/javascript-snippets #for hotkeys

https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw #great React.js videos

https://www.youtube.com/watch?v=xsSnOQynTHs # Must watch for the beginner #1: video by a guy who made Redux

https://coderpad.io/HH6MKWPP
