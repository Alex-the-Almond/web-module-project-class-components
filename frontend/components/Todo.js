import React from 'react'

export default class Todo extends React.Component {

 constructor(props){
   super(props);
   this.state={

   }
 }
  render() {
    // const { name, completed, id, toggleCompleted, todos } = this.props; 
    return (
      <div>
        <h3 onClick={() => this.props.toggleCompleted(this.props.id)} className={`todo${this.props.completed ? ' completed' : ''}`}>{this.props.name}</h3>
      </div>
    )
  }
}
