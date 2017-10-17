import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Apps from './containers/'
import configureStore from "./store/configureStore"
import * as actions from './actions'

const newHistory = createBrowserHistory();


// ====================
// initialState
// ====================
const initialState = 
{
  todos:[],
  visibilityFilter: 'SHOW_ALL'
}

// Store Initialization
// ------------------------------------
const store = configureStore(initialState);
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
