let nextTodoId = 0
// ====================
// Action Creators
// ====================
export const listData = order => {
  console.log('ssa');
  // return dispatch => {
  //   let myRequest = new Request('list.json');
  //   return fetch(myRequest)
  //     .then(response => console.log(response.json()))
  //     .then(json => dispatch(receivePhones(order, json))) // リクエスト完了状態へ変更する
  // }
}

//読み込み（1回だけ）
export function loadList() {
  return (dispatch, getState) => {
    console.log(getState());
    // let rew = {
    //   todos:[
    //     {
    //       id: 0,
    //       text:"test1",
    //       completed: false
    //     },
    //     {
    //       id: 1,
    //       text:"test2",
    //       completed: false
    //     },
    //     {
    //       id: 2,
    //       text:"test3",
    //       completed: false
    //     }
    //   ],
    //   visibilityFilter: 'SHOW_ALL'
    // }
    // localStorage.setItem("aaa", JSON.stringify(rew))
    const eaa = JSON.parse(localStorage.getItem("aaa"))
    const listlength = Object.keys(eaa.todos).length;
    console.log('length:'+listlength)
    nextTodoId = listlength
    dispatch(successLead(eaa.todos))
    console.log('--- wwwwwwwwwww ---')
    console.log(eaa.todos);
    // fetch(eaa)
    //   .then(response => console.log(response))
    // console.log(...eaa);
    
    console.log('--- wwwwwwwwwww ---')
    console.log(getState());
    console.log('--- eeeeeeeeeee ---')
    // const { auth } = getState();
    // taskList.path = `tasks/${auth.id}`;
    // taskList.subscribe(dispatch);
  };
}

//書き込み（毎回）
export function importList() {
  return (dispatch, getState) => {
    // console.log(getState());
    localStorage.setItem("aaa", JSON.stringify(getState()))
    // const asq = localStorage.getItem("aaa")
    // const eaa = JSON.parse(asq)
    // console.log('--- ここから ---')
    // console.log(eaa)
    // console.log('--- ここまで ---')
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

// export const successLead = (id, text, completed) => {
//   return {
//     type: 'SUCCESS_LEAD',
//     id,
//     text,
//     completed
//   }
// }
