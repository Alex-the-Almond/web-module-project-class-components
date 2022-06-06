import React from 'react';
import Todo from './Todo.js';

export default class TodoList extends React.Component {
  
  
  
  render() {
    return (
      <div>
        {
        this.props.todos.map(todo => (
          <Todo id={todo.id} name={todo.name} completed={todo.completed} toggleCompleted={this.props.toggleCompleted} key={todo.id} />
        ))
        }
      </div>
    )
  }
}
