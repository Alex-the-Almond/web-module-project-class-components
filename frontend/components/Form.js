import React from 'react'

export default class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      todoName: ''
    }
  }

  handleChanges = (evt) => {
    this.setState({todoName: evt.target.value})
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addTodo(this.state.todoName)
    this.setState({ todoName: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input name='todoName' type='text' placeholder='Input Todos here' onChange={this.handleChanges} value={this.state.todoName}></input>
          <button type='Submit'>Submit</button>
          <button onClick={() => this.props.clearCompleted()}>Clear</button>
        </form>
      </div>
    )
  }
}
