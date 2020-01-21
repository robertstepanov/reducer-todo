import TodoForm from "./TodoForm";

import React, { useReducer } from 'react';
import { initialState, todoReducer } from "../reducers/todoReducer";


const TodoList = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState);

console.log(state);

  return (
    <div className="todo-list">
     {state.map(item => {
       return <TodoForm key={item.id} item={item} />
     })}
    </div>
  )
}

export default TodoList;