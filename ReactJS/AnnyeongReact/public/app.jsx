var Greeter = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Annyeong React</h1>
        <p>tis is from Stephen Lee</p>
      </div>
    );
  }
});

// ReactDom method
ReactDOM.render(

  <Greeter/>, //JSX code
  document.getElementById('app')
);
