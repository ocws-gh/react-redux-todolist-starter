import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
// import thunk from 'redux-thunk'
import ReduxThunk from 'redux-thunk'
import reducer from "../reducer/"


function configureStore(initialState) {
  return createStore(reducer, initialState, applyMiddleware(logger, ReduxThunk));
}

export default configureStore