# Welcome to my React Native Repo!

"Invest in your dream. Grind now. Shine later"

# Getting started!

## ESLint configurations
```
$ npm install --save-dev eslint-config-rallycoding
$ touch .eslintrc # create custom config file here
                  # check out the file to see what i wrote.
                  # basically we set rallycoding

```

## Installation
**Xcode**

	package our code + the React Native library into an installable app and run it on the iOS simulator.
	IMPORTANT: make sure to have latest version Xcode.

**Homebrew**

	just to install node. lolz
	brew install node
	node -v
**Node/NPM**

	Node runs JS outside of the browser. NPM is used for installing and managing depedencies Node and NPM come together
**Watchman**

	watches files on the hard drive and waits for them to change
	`brew install watchman` or wanna delete? brew unlink watchman
**RN CLI**

	React Native command line interface. Used to generate new React Native projects
	npm install -g react-native-cli

## ESLint Setup
**Atom**
	get linter-eslint.
**Configs**
	need to set up configs inside the projects. Check out Albums for more. Project specific setup

## Commands
```
$ react-native run-ios # run application in iOS env
```
* Press CMD + D for simulator in a debug mode
* use `debugger;` statement to debug XD

## React vs ReactNative

**React**
* Knows how a component should behave.
* Knows how to take a bunch of components and make them work together.
* Styling: Bootstrap etc.

**React Native**
* Knows how to take the  output from a component and place it on the screen.
* Provides default care components (image, text)
* Styling: have to style them manually.

## Angular vs. React
* DOM
    Angular creates customized Document Object Model (DOM) elements.
    React has Virtual dom: Your changes get reflected to a virtual DOM. Then you diff that with the actual dom,
    and only update what changed. This makes updates faster.

* Data Flow
    Angular has a two way data binding (view updates model model updates view) but React has uni-directional
    (https://medium.com/@AdamRNeary/unidirectional-data-flow-yes-flux-i-am-not-so-sure-b4acf988196c#.i8o6n8sgb) data flow.

## functional Component vs. Class Component

**Functional Component**
* Used for presenting static data
* Cannot handle fetching data
* Easy to write

```js
const Header = () => {
    return <Text>Hi, gapaso~!</Text>
}
```
**Class Component**
* Used for dynamic sources of data
* Handles any data that might change (fetching data, user events, etc)
* Knows when it gets rerendered to the device (useful for data fetching)
* More code to write
* Life cycle methods

```js
class Header extends Component {
  render() {
    return <Text>Hi, gapaso~!</Text>
  }
}
```

## Component level state
* Component has a default state.
* a plain JS object used to record and respond to user-triggered events (including when user opens your app).
* When we need to update what a component shows, call `this.setState`
* Only change state with `setState`, do not do `this.state=?`

# Projects

## Albums React Native App
build an instagram-like application
```
$ react-native init albums # create an app called albums
```

## Authentication React Native App
build an Authentication application with firebase

## Tech Stack React Native App
build an application using Redux

# References
* Udemy courses & lots of googling & my knowledge in JS

# License
* MIT
