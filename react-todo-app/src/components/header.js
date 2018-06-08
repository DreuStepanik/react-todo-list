import React from 'react';

// Good to Know --
// A React component is a bit of code that represents a piece of the page.
// Each component is a JavaScript function that returns a piece of code that represents a piece of a web page.
// Class components must have a function called render().
// The render function returns the JSX of the component

// Generates a default header class as a React component to be imported as a component within the 
// main body of the app.

// React uses a language called JSX that looks like HTML but works inside JavaScript
// You can add plain HTML to this section to make it appear on the UI
export default class Header extends React.Component {
  render() {
    // You can put JavaScript variables / functions inside of your JSX
    const headerText = 'React To-Do List';
    return (
      <h1>{ headerText }</h1>
    );
  }
}
