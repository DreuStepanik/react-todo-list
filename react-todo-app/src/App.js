import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

class App extends Component {
  // Props are information shared from a parent component to a child component.
  constructor(props) {
    // A constructor method of a React component always needs to call super(x) before anything else.
    // Initializes 'this'
    super(props);
    // object representing the component state.
    // State is way to update our UI based on events.
    this.state = {
      // Default state / ToDo's to display
      todos: [
        {id: 0, text: "Make a practice ToDo list!"},
        {id: 1, text: "Find a React conference to attend."},
        {id: 2, text: "Get a Raise"}
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodoFromList = this.removeTodoFromList.bind(this);
  }

  // When we change the state of our component, it will call the render function again.
  // Change the state with this.setState() && give it a new object representing the new state.
  // KEEP IN MIND - React waits a bit to see if there are more changes to make, then it does the state changes.
  // If changing the state is based on the old state, give setState a function, not an object.

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodoFromList(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }

  // Renders the contents of the app - Important
  render() {
    return (
      // class is a keyword in JavaScript, so we can’t use it
      // use className instead
      // You can put JavaScript variables / functions inside of your JSX
      <div className="basic-react-app">
        <div className="outer-border">
          <div className="todo-list-wrapper">
            <Header />
            <TodoInput todoText="" addTodo={ this.addTodo } />
            {/* Example of using a function to render the content */}
            <ul>
              {
                this.state.todos.map((todo) => {
                  return <TodoItem todo={ todo } key={ todo.id } id={ todo.id } removeTodoFromList={ this.removeTodoFromList }/>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
