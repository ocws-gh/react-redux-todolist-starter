let nextTodoId = 0
// ====================
// Action Creators
// ====================
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const completeTodo = id => {
  return {
    type: 'COMPLETE_TODO',
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
