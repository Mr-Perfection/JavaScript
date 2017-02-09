# Annyeong (Hello) React

**I haven't touched React (because of algorithm practices) for awhile so this is more like a review.**


## Getting started

```
# installation
$ npm init
$ npm install express@4 --save #'--save' saves express into package.json
$ npm install # if express is not part of package.json

# run server
$ node server # alternatively server.js
```

```js
// tell which server to serve
// which folder name to expose to the public
app.use(express.static('public'));

// listen() takes two args: port number, function
app.listen(3000, function() {
  console.log('Annyeong, server is up and running sir!')
});

// create a component
// only one root html tag can be inside the return. Check app.jsx
var Greeter = React.createClass({render:function(){return ...}})

```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script> <!-- not needed for React Native -->
<!-- Inside index.html -->
<div id="app"></div>
<script type="text/babel">
// this part of JSX code can go to app.jsx
  ReactDOM.render(
    <h1>Annyeong React</h1>, //JSX code
    document.getElementById('app')
  );
</script>
```

## License

* Free for all of you <3.