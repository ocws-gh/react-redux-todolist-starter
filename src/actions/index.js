let nextTodoId = 0
// ====================
// Action Creators
// ====================
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export function completeTodo(id) {
  return {
    type: 'COMPLETE_TODO',
    id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
