import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
  // Class components can store information about their current situation.
  // This information is called state, which is stored in a JavaScript object.
  constructor(props) {
    super(props);
    // object representing the component state.
    // State is way to update our UI based on events.
    this.state = { value: this.props.todoText };

    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.addTodoToList = this.addTodoToList.bind(this);
  }

  handleInputValueChange(event) {
    this.setState({ value: event.target.value });
  }

  addTodoToList(todo) {
    // Ensure a todo was actually entered before submitting
    if (todo.length > 0) {
      // Calls upon the addTodo method within the app.js file. 
      this.props.addTodo(todo);
      // Clear the input field
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <div>
        {/* Detect the input value change, which will change / update the state with onChange */}
        <input type="text" value={ this.state.value } onChange={ this.handleInputValueChange } />
        <button className="btn add-todo-btn" onClick={ () => this.addTodoToList(this.state.value) }>Add</button>
      </div>
    );
  }
}
