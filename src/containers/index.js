import React from 'react';
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions'
import TodoItem from '../components/TodoItem';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: this.props.text
    };
  }
  componentWillMount() {
    console.log('1:componentWillMount');
    this.props.loadList();
    // this.props.loadTasks();
    // Object.keys(localStorage).forEach(function(key) { console.log(key); });
  }
  componentDidMount() {
    console.log('2:componentDidMount');
    // let rew = {
    //     data1: "hoge1",
    //     data2: "hoge2",
    //     data3: "hoge3"
    // }
  }
  componentDidUpdate() {
    console.log('3:componentDidUpdate');
    this.props.importList();
    
    // localStorage.setItem("aaa", this.props)
    // localStorage.setItem('test', rew)
    // console.log('rr:'+ewa)
  }
  componentWillUnmount() {
    console.log('4:componentWillUnmount');
  }
  // componentDidMount() {
  //   fetchHackerNews().then(json => {
  //   this.setState({
  //     news: json
  //   })
  // });


  handleSubmit(e) {
    e.preventDefault();
    const text = e.target.elements[0].value;
    if (!text) {
      return;
    }
    this.props.addTodo(text);
    e.target.elements[0].value = '';
  }

  compitem(e) {
    this.props.completeTodo(e);
  }

  render() {
    return (
      <div>
        {this.renderAddTodo()}
        {this.renderTodoList()}
      </div>
    );
  }

  renderAddTodo() {
    console.log('-- ADD TODO --');
    return (
      <div>
        <h1>TODO LIST</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="text" placeholder="title" value={this.state.text} />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }

  renderTodoList() {
    console.log('-- TODOLIST --');
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem key={todo.id} compm={this.compitem.bind(this)} {...todo} />
        ))}
      </ul>
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
