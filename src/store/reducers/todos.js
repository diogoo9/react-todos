const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
  console.log("PASSANDO NO REDUCER");
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Math.random(), text: action.payload.text, complete: false },
      ];

    case "TOGGLE":
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? { ...todo, complete: !todo.complete }
            : todo
      );

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
}
