export const initialState = {
    todos: [
      {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589
      },
      {
        item: "Study JS Basics",
        completed: false,
        id: 3892984567
      }
    ]
  };

  
  export const reducer = (state, action) => {
    console.log("action", action);
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };


      case "TOGGLE_COMPLETE":
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };


      case "CLEAR_COMPLETED":
        return {
          ...state,
          todos: state.todos.filter(todo => !todo.completed)
        };

      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      default:
        return state;
    }
  };


