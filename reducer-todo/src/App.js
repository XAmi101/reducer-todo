import React, { useReducer } from "react";
import './App.css';

//components
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

//reducer
import { initialState, reducer } from "./reducer/reducerList";


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("reducer state", state);

  const addNew = todo => {dispatch({ type: "ADD_TODO", payload: todo });};

  const toggle = id => {dispatch({ type: "TOGGLE_COMPLETE", payload: id });};

  const clear = () => {dispatch({ type: "CLEAR_COMPLETED" });};

  const deleteTodo = id => {dispatch({ type: "DELETE_TODO", payload: id });};

  return (
    <div className="App">
      <h1>Reducer Todo App!</h1>
      <TodoForm addTodo={addNew} />
      <TodoList
        items={state.todos}
        toggle={toggle}
        clear={clear}
        delete={deleteTodo}
      />
    </div>
  );
}


export default App;





