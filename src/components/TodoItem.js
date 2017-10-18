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
    const flagDone = (this.props.completed) ? 'done' : null;
    const textDone = (this.props.completed) ? 'undone' : 'done';
    return (
      <li className={flagDone}>
        <span>{this.props.id}: {this.props.text}</span> <a href="#" onClick={this.handleDone.bind(this)}>{textDone}</a>
      </li>
    );
  }
}

export default TodoItem;
