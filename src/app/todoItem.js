var React = require('react');
// if we would have loaded react using script tag in index.html this wouldnt be required
//but since we modularized using webpack we need to import react again
require('./css/todoItem.css')
//child component
var TodoItem = React.createClass({
  render:function(){
    return(
      <li className="todo-item">
        <span className="item-name">{this.props.item}</span>
        <span className="item-remove" onClick={this.handleDelete}> x </span>
        {/*instead of creating a new method in childComponent
          we can use arrow function to invoke the delete fn
        <span className="todo-delete-special" onClick={(e)=>this.props.onDelete(this.props.item)}> x </span>
        */}
      </li>
    )
  },
handleDelete:function(){
  this.props.onDelete(this.props.item);
}
})

module.exports = TodoItem;
