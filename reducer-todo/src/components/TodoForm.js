import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");
  

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo})
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        />
        <button
          onClick={() => dispatch({ type: "ADD_TODO", payload: newTodo })}
        >
          Add Todo
        </button>
        {console.log(newTodo)}
        
        <h2>{state.item}</h2>
      </form>
      <i
        className="fa fa-trash"
        onClick={() => dispatch({ type: "REMOVE_TODO" })}
      >
        Remove
      </i>
    </div>
  );
};

export default TodoForm;
