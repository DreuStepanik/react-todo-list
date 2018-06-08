import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('App compiles successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
