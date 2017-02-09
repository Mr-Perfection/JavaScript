var Greeter = React.createClass({
    getDefaultProps: function() {
        return {name: 'React', message: 'No comment, sir!'}
    },
    onButtonClick: function(e){
      // prevent page from refresh
      e.preventDefault();
      var name = this.refs.name.value;
      alert(name);
    },
    render: function() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Annyeong {name}!</h1>
                <p>{message}.</p>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

var firstName = 'Stephen';
var message = 'Hello, my name is Stephen. Greetings!';
// ReactDom method
ReactDOM.render(

    <Greeter name={firstName} message={message}/>, //JSX code
        document.getElementById('app'));
