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

## React vs ReactNative

**React**
* Knows how a component should behave.
* Knows how to take a bunch of components and make them work together.
* Styling: Bootstrap etc.

**React Native**
* Knows how to take the  output from a component and place it on the screen.
* Provides default care components (image, text)
* Styling: have to style them manually.

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

```js
class Header extends Component {
  render() {
    return <Text>Hi, gapaso~!</Text>
  }
}
```
# Projects

## Albums React Native App
```
$ react-native init albums # create an app called albums
```



# References
* Udemy courses & lots of googling & my knowledge in JS

# License
* MIT
