// initial state of the store is an empty array
const initialState = {
  todos: [],
};

// reducer function that takes in state and action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // if action type is ADD_ITEM, return new state with new todo item
    case "ADD_ITEM":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    // if action type is TOGGLE_ITEM, return new state with toggled todo item
    case "TOGGLE_ITEM":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    // if action type is DELETE_ITEM, return new state with deleted todo item
    case "DELETE_ITEM":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// export reducer function
export default reducer;
