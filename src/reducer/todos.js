// const init = {
//   users: []
// }

const todos = ( state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'SUCCESS_LEAD':
      let initialTodo = []
      if (action.data){
        Object.keys(action.data).forEach(key =>{
          let todo = action.data[key];
          initialTodo.push({
            id: todo.id,
            text: todo.text,
            completed: todo.completed,
          })
        })
      }
      return [
        ...state,
        ...initialTodo
      ]
    default:
      return state
  }
}

export default todos;