import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './TodoItemForm.css'

class TodoItemForm extends Component {
  static defaultProps = {
    buttonLabel: 'Add Todo'
  }

  constructor(props) {
    super(props)

    this.state = {
      // label could either be the currently editing item
      // or nothing if it's a new item
      label: this.props.label || ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()

    // if props.id is undefined, must be a new todo-item, so generate an ID
    // otherwise, just update the props.id in TodoList state
    this.props.submit(this.props.id || uuidv4(), {
      label: this.state.label,
      isEditing: false
    })

    this.setState({ label: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="TodoItemForm">
        <input
          type="text"
          name="label"
          value={this.state.label}
          onChange={this.handleChange}
        />
        <button>{this.props.buttonLabel}</button>
      </form>
    )
  }
}

export default TodoItemForm