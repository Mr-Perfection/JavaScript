# Welcome to my tech stack Repo!
"Make the most out of every moment."

I built a simple application using Redux

### Setup
```
$ npm install --save redux react-redux # install redux
$ npm install --save-dev eslint-config-rallycoding # make sure to setup [ESlint](ReactNative/tech_stack/.eslintrc) ;)

```
### Redux
Use [Playground](https://stephengrider.github.io/JSPlaygrounds/)

**How Redux works**
![alt text](demo/redux.png "redux demo")

**How Redux works in React Native**
![alt text](demo/redux-react-native.png "redux react-native demo")



```js

const reducer = (state=[], action) => {
	if (action.type === 'split_string') {
  	return action.payload.split('');
  } else if (action.type === 'add_character') {
		// this returns new list with elements in state + action.payload
    return [ ...state, action.payload ]; //new ES6 style JS. '...state' means all the elements in state.

  }
  return state;
};
const store = Redux.createStore(reducer);
store.getState();
const action = {
  	type: 'split_string',
  	payload: 'adds'
};

const action2 = {
  type: 'add_character',
  payload: 'a'
};

store.dispatch(action);
store.getState();

store.dispatch(action2);
store.getState();

```
![alt text](demo/redux_in_pratice.png "redux demo")
