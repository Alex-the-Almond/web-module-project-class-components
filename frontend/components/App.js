import React from 'react';
import TodoList from './TodoList.js';
import Form from './Form.js';

const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

export default class App extends React.Component {

  constructor(){
    super()
    this.state={
      todos: todos
    }
  }

  addTodo = ( todo ) => {
    let newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleCompleted = (itemId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
    })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: [...this.state.todos.filter(x =>!x.completed)]
    })
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <div>
          <Form addTodo={this.addTodo} todos={this.state.todos} clearCompleted={this.clearCompleted}/>
        </div>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
      </div>
    )
  }
}
