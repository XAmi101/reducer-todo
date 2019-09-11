import React from "react";
import Todo from "./todo";


const TodoList = props => {
  console.log("props :", props);
  return (
    <div>
      {props.items.map(item => (
        <Todo todo={item} toggle={props.toggle} delete={props.delete} />
      ))}
      <button onClick={props.clear}>Clear Completed</button>
    </div>
  );
};

export default TodoList;

