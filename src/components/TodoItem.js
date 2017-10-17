import React from 'react'
import ReactDOM from 'react-dom'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDone(e) {
    e.preventDefault();
    this.props.compm(this.props.id);
    return;
  }
  
  render() {
    return (
      <li>
        {this.props.id}: {this.props.text} <a href="#" onClick={this.handleDone.bind(this)}>Done</a>
      </li>
    );
  }
}

export default TodoItem;
