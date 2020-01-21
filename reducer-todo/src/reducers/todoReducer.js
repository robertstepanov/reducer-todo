export const initialState = [
  {
  item: 'Learn about reducers',
  complete: false,
  id: Date.now()
},
{ item: 'Use reducers in project',
  complete: false,
  id: Date.now()
}
]
console.log(initialState);

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        id: Date.now(),
        item: action.payload,
        complete: false
      }
    case 'REMOVE_TODO':
      return {
        complete: false
      }
      default:
      return state
  }
}