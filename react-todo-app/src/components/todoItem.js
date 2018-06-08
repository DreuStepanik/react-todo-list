import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodoFromList(id) {
    // Calls upon the removeTodoFromList method within the app.js file.
    this.props.removeTodoFromList(id);
  }

  render() {
    return (
      <div className="todo-wrapper">
        {this.props.todo.text}
        <button className="remove-todo-from-list" onClick={ (e)=> this.removeTodoFromList(this.props.id) }>remove</button>
      </div>
    );
  }
}
