import React from 'react';
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions'
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  handleSubmit(e) {
    const text = e.target.elements[0].value;
    if (!text) {
      return;
    }
    this.props.addTodo(text);
  }

  render() {
    return (
      <div>
        <AddTodo onSubmit={this.handleSubmit.bind(this)} />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
const Apps = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Apps
