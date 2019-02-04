import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ]
    }
  }
  render() {
    return (
      <div className="App">
      <ul>
        { this.state.todos.map( (todo, index) => 
        <Todo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
        )}
      </ul>
      </div>
    );
  }
}

export default App;
