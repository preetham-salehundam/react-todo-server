// using js syntax
var React = require('react');
var ReactDOM =  require('react-dom');
//name of the selector
var TodoItem =  require('./todoItem');
var AddItem = require('./addItem');
//ES6 syntax
import About from './about';
//css loader and style loaders will load css into the jsx
require('./css/index.css');
import {Router,Route,browserHistory,Link} from 'react-router';
//create app component
var App =  React.createClass({
  render:function(){
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={ToDoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    )
  }
});


//create the component
var ToDoComponent = React.createClass({
  /*state is used to hold data in a component,
   where as props are used to communicate data between parent and child components*/
 getInitialState:function(){
   //this sets the initial state of the component
   //returns a state obj
    return{
      todos:["washup","eat cheese","take a nap","Buy flowers"]
    }
 },
  render:function(){
    //return is a method here
    //this =  component

    //iterating through todos
    //create a  local version of todos so that we wont alter the main state todos

    var todoitems=this.state.todos;
    todoitems=todoitems.map((item,index)=>
      //key is unique identifier
      //the reactSelectors need to start with caps letter to differentiate it from html tags
      <TodoItem item={item} key = {index} onDelete={this.onDelete} />
  )
    return(
      <div id="todo-list">
            <Link to={'/about'} >About</Link>
            <p>The busiest people have the most leisure...</p>
              <ul>
                {todoitems}
              </ul>
              <AddItem onAddItem={this.AddItem}/>
      </div>

    )


  },
  onDelete:function(item){
      var updatedTodoItems=this.state.todos.filter((val,index)=>
              val!==item
    );
    this.setState({
      todos:updatedTodoItems
    })
  },
  AddItem:function(item){
    var updatedTodoItems = this.state.todos;
    updatedTodoItems.push(item);
    this.setState({
      todos:updatedTodoItems
    })
  }
})



var bioData = {"name":"Preetham","age":23,"height":"172cms"};

//put the component in DOM
//component needs to be represented as a css selector in the first arg
// ReactDOM.render(<ToDoComponent msg="this is a test msg from props" obj = {bioData}
//  />,document.getElementById('todo-wrapper'))
//load app component for routing
ReactDOM.render(<App />,document.getElementById('todo-wrapper'))
