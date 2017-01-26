## Dear readers

**This repository is dedicated to showcase what I learned about React.js. I love learning new things and hope that this can help you learn about React as well. **

## Useful commands

```
$ npm install -S webpack-dev-server
$ npm install -g webpack-dev-server #globally install dev-server
$ webpack-dev-server --content-base src #set the root for localhost:8080
$ npm uninstall -g webpack-dev-server #and add the code below in package.json
#"scripts": {
#  "dev": "./node_modules/.bin/webpack-dev-server --content-base src --inline --hot",
#  "test": "echo \"Error: no test specified\" && exit 1"
#}

#to view the rendering options in chromle
# go to console in Opera or Chrome and hit escape key (Use paint flashing).

$NODE_ENV='production' webpack -p #production webpack optimization
```

## What I learned


* React automatically handles DOM manipulation
* State is initialized in the constructor method and can be accessed by calling this.state.{KEY_VALUE}
* Props is a properties that can be transferred through parameters in component by calling <Header name={VALUE}/> and in Header component, you can simply use it as this.props.name
* use .bind(this) for function call to specify which component you are calling function from.
```js

// navigate()
// whenever user presses the 'featuered' button it will show the props on console
<button onClick={this.navigate.bind(this)}>featured</button>
navigate() {
  console.log(this.props);
}

// or you can do this...
// this will navigate your application back to root path and you can go back to your previous state when used browser back button
<button onClick={this.navigate.bind(this)}>featured</button>
navigate() {
  this.props.history.pushState(null, "/");
}

// this too.
// this will navigate your application back to root path. You cannot reverse your action though because you replaced the state.
this.props.history.replaceState(null, "/");

// params

// inside Router
<Route path="archives(/:article)" name="archives" component={Archives}></Route>
//(/:article) <= () around /:article means if there is no matching article, it will render all archives
// archives component
const { params } = this.props;
const { article } = params;
// http://localhost:8080/#/archives/some-articles?_k=jcmgui as an example url
<h1>Archives ({article})</h1>


// location
const { query } = this.props.location;
const { date, filter } = query; //get date and filter params from query param.

// http://localhost:8080/#/archives/some-articles?_k=jcmgui?date=today&filter=none, ?date=today&filter=none is the location param.
// archives component
<h4>date: {date}, filter: {filter}</h4>


// detect active component in two ways
console.log(history.isActive("archives")); //programmatically
<Link to="archives" activeClassName="test"><button class="btn btn-primary">archives</button></Link> // systematically using activeClassName

// cool way of getting active html element
const { location } = this.props;
const archivesClass = location.pathname.match(/^\/archives/) ? "active" : ""; //this will return true if it is matched pathname


// index route is basically root path
<IndexRoute component={Featured}></IndexRoute>


// handle collapse in nav bar
// initially nav bar is collapsed
constructor() {
  super()
  this.state = {
    collapsed: true,
  };
}

// this toggleCollapse function will be used to invert collapsed boolean and update the state.
toggleCollapse() {
  const collapsed = !this.state.collapsed;
  this.setState({collapsed});
}

// get the collapsed value from the state and create a constant variable based on collapsed
render() {
  const {collapsed} = this.state;
  const navClass = collapsed ? "collapsed" : "";
  return (
    // ...
    <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
    // ...
    <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
    // ...
  );
}

// use map to render a multiple partials
const Articles = [
  "hello",
  "world",
  "yeah",
].map((title, id) => <Article key={id} title={title}/>);
// ...



//events - a super-basic Javascript (publish subscribe) pattern

var events = {
  events: {},
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function(eventName, fn) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
};

// React Flux


```

## Instructions to run
1. Navigate to folder */1-basic-react*
2. *NPM install*
3. *NPM run dev*
4. Navigate to localhost:8080

## References
### REACT JS TUTORIALS from LearnCode.academy on YouTube


## basic-react
* commit 2bb8a19b8194847c053f9f7ff54bbcdb6c2b0106
* commit 57c5338989bd10593735559c0b3a9ae44f9f0ab2
* commit 2bb8a19b8194847c053f9f7ff54bbcdb6c2b0106
* commit 2f22485fb9513116d1ea46765086ab9723f034d9
* commit e630fc111af40f6b31370e3093a709a258537503

## single-page
* commit 394209aa1b3928298130bebaf1e54aa87448d6e2
* commit b951e5f7ff6ee7619abc9422632dae12e4e212e3
* commit ed26a9f917f530bd8db39ed03d8eae168459657f

## react-flux (To-Do List)
* commit c203d6d6c81783518ab049ff2e449d9f2a9ee82c


## Definitions

**DOM**
* The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.
* In the DOM, documents have a logical structure which is very much like a tree; to be more precise, which is like a "forest" or "grove", which can contain more than one tree.

**JSX**
* JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant. Just like XML, JSX tags have a tag name, attributes, and children. If an attribute value is enclosed in quotes, the value is a string.
* Simply put, JSX is JavaScript with XML.

**EventsSystem (Mediator or PubSub)**
* pubsub design pattern (publish/subscribe), which allows us to decouple our modules. Once integrated with our pubsub module, they can emit events and not have to worry about which modules depend on them. Modules can subscribe to events and be notified when any module publishes.

**React Flux**
* Flux is a system architecture that encourages single-directional data flow through your application
* components -> Actions -> Dispatcher -> Stores -> components
* Works similar to EventsSystem, and the only difference is that all the data should flow into the Stores through Actions. Similarly, the data flows out of the Stores via listeners. It promotes unidirectional data flow and you have a clear idea about how the data flows throughout your app.

## Q&A

**Question: how can you use class in html tags in JSX? Shouldn't it be className?**
* ```react-html-attrs``` transforms JSX class attributes into className and for attributes into htmlFor, allowing you to copy and paste HTML into your React components without having to manually edit these particular attributes each time
