// action creators for addItem, toggleItem, and deleteItem

let nextTodoId = 0;

export const addItem = (text) => ({
  type: "ADD_ITEM",
  payload: {
    id: nextTodoId++,
    text,
  },
});

export const toggleItem = (id) => ({
  type: "TOGGLE_ITEM",
  payload: { id },
});

export const deleteItem = (id) => ({
  type: "DELETE_ITEM",
  payload: { id },
});
