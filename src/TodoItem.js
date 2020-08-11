import React, { Component } from 'react'
import TodoItemForm from './TodoItemForm'
import './TodoItem.css'

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleEdit() {
    this.props.edit(this.props.id)
  }

  handleDelete() {
    this.props.remove(this.props.id)
  }

  handleToggle() {
    this.props.toggle(this.props.id)
  }

  render() {
    return (
      <li className={`TodoItem ${this.props.completed && 'completed'}`}>
        {this.props.isEditing ? 
          <TodoItemForm
            buttonLabel="Save"
            mode="edit"
            id={this.props.id}
            label={this.props.label}
            submit={this.props.submit}
          />
        : <span className="TodoItem-label" onClick={this.handleToggle}>{this.props.label}</span>}
        
        <div className="TodoItem-buttons">
          {!this.props.isEditing && <button onClick={this.handleEdit}>Edit</button>}
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </li>
    )
  }
}

export default TodoItem