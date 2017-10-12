import React from 'react'
import ReactDOM from 'react-dom'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    };
  }

  // 呼び出し時の処理
  componentDidMount() {

  }

  reg(e) {
    e.preventDefault();
    this.props.onSubmit(e);
    e.target.elements[0].value = '';
    return;
  }
  
  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <form onSubmit={this.reg.bind(this)}>
          <input type="text" name="text" placeholder="title" value={this.state.text} />
          <button type="submit">登録</button>
          {/*
            {this.state.text}
            <div><input type="text" name="text" value={this.state.text} placeholder="test" onChange={this.changeText.bind(this)} /></div>
          */}
        </form>
      </div>
    );
  }
}
export default AddTodo;
