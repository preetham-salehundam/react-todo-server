// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';

// ReactDOM.render(<App />,document.getElementById('app'));

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./App.jsx');

app.get('/',function(req,res){
	var html = ReactDOMServer.renderToString(
		<Component />
	);
	res.send(html);
});
var port=3001;
app.listen(port,function(){
	console.log('http://localhost:'+port);
})


