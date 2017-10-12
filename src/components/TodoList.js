import React from 'react'
import ReactDOM from 'react-dom'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    );
  }
}
export default TodoList;
