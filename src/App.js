import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
        <Todo />
        <Todo />
      </ul>
      </div>
    );
  }
}

export default App;
