import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import Apps from './containers/'
import configureStore from "./store/configureStore"
import * as actions from './actions'

const newHistory = createBrowserHistory();


// ====================
// initialState
// ====================
// const url = 'http://localhost:8080/data/list.json';
// let initialState = '';
// const url = new Request('data/list.json');
// fetch(url)
//   .then(response => { 
//     return response.json();
//   })
//   .then(json => {
//     initialState = json
//     console.log(initialState);
//   });

// console.log('ddd:'+ initialState);

// const initial = json => {
//   const initialState = JSON.stringify(json)  
// }

const initialState = 
{
  todos:[],
  visibilityFilter: 'SHOW_ALL'
}

// Store Initialization
// ------------------------------------
const store = configureStore(initialState);
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Router history={newHistory}>
      <Route path="/" component={Apps} />
    </Router>
  </Provider>,
  MOUNT_NODE
)
