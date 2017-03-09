// import React from 'react';

// class App extends React.Component {
	// render(){
		// return (
			// <div>
				// <p>Hello world!</p>
			// </div>

		// );
	// }
// }
// export default App;

var React = require('React');

var App = React.createClass({
	render:function(){
	
		return (<h1>Hello world from server!</h1>);
	}
})
console.log(App);
module.exports = App;
