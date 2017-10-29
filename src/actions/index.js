let nextTodoId = 0
const getItemName = "todolist"
// ====================
// Action Creators
// ====================

//読み込み（1回だけ）
export function loadList() {
  return (dispatch, getState) => {
    const todoListStorage = JSON.parse(localStorage.getItem(getItemName))
    console.log('todoListStorag: '+todoListStorage)

    if(todoListStorage == null) {
      let rew = {
        todos:[],visibilityFilter: 'SHOW_ALL'
      }
      localStorage.setItem(getItemName, JSON.stringify(rew))
      console.log('I made a list!!!')
    }

    if(todoListStorage != null) {
      const listLength = Object.keys(todoListStorage.todos).length
      console.log(listLength)
      nextTodoId = listLength
      dispatch(successLead(todoListStorage.todos))
    }
  };
}

//書き込み（毎回）
export function exportList() {
  return (dispatch, getState) => {
    localStorage.setItem(getItemName, JSON.stringify(getState()))
  };
}

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

export const successLead = data => {
  return {
    type: 'SUCCESS_LEAD',
    data
  }
}
