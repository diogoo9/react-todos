import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
