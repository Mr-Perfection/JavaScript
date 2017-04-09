# Welcome to my tech stack Repo!
"Make the most out of every moment."

I built a simple application using Redux

# Redux
![alt text](demo/redux.ong "redux demo")
```js

const reducer = (state=[], action) => {
	if (action.type === 'split_string') {
  	return action.payload.split('');
  }
  return state;
};
const store = Redux.createStore(reducer);
store.getState();
const action = {
  	type: 'split_string',
  	payload: 'adds'
};

store.dispatch(action);
store.getState();

```
![alt text](demo/redux_in_pratice.ong "redux demo")
