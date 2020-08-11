import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoItem from './TodoItem'
import TodoItemForm from './TodoItemForm'
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: {
        [uuidv4()]: {
          label: 'Walk Dog',
          isEditing: false,
          completed: false
        },
        [uuidv4()]: {
          label: 'Walk Crocodile',
          isEditing: false,
          completed: false
        }
      }
    }

    this.submitTodo = this.submitTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
  }

  submitTodo(todoId, todoData) {
    const updatedTodos = {
      ...this.state.todos,
      [todoId]: todoData
    }

    this.setState({ todos: updatedTodos })
  }

  removeTodo(todoId) {
    const allTodos = { ...this.state.todos }
    delete allTodos[todoId]

    this.setState({ todos: allTodos })
  }

  editTodo(todoId) {
    this.setState({
      todos: {
        ...this.state.todos,
        [todoId]: {
          ...this.state.todos[todoId],
          isEditing: true
        }
      }
    })
  }

  toggleTodo(todoId) {
    this.setState({
      todos: {
        ...this.state.todos,
        [todoId]: {
          ...this.state.todos[todoId],
          completed: !this.state.todos[todoId].completed
        }
      }
    })
  }

  render() {
    const output = [];

    for (const todo in this.state.todos) {
      output.push(
        <TodoItem
          {...this.state.todos[todo]}
          key={todo}
          id={todo}
          submit={this.submitTodo}
          remove={this.removeTodo}
          edit={this.editTodo}
          toggle={this.toggleTodo}
        />
      )
    }

    return (
      <div className="TodoList">
        <ul>
          {output}
        </ul>

        <TodoItemForm
          submit={this.submitTodo}
        />
      </div>
    )
  }
}

export default TodoList