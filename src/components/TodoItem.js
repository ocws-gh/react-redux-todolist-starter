import React from 'react'
import ReactDOM from 'react-dom'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  comp(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.completeTodo(this.props.id);
  }
  
  render() {
    return (
      <li>
        {this.props.id}: {this.props.text}
        <a href="" onClick={this.comp.bind(this)}>完了</a>
      </li>
    );
  }
}

export default TodoItem;
