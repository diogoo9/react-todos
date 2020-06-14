export function addTodo(text) {
  console.log("PASSANDO NA TODOS ACTIONS");
  return {
    type: "ADD",
    payload: {
      text,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: "TOGGLE",
    payload: {
      id,
    },
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE",
    payload: {
      id,
    },
  };
}
