import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../store/actions/todos";



const TodoLsit = (props) => {
  const { todos, toggleTodo, removeTodo } = props;
  let input = null;

  const handleSubmit = (e) => {
    e.preventDefault();
  
    props.addTodo(input.value);
  
    input.value = "";
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input ref={(el) => (input = el)} />
        <button type="submit">Novo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <div>
              <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToPro = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispath) =>
  bindActionCreators(TodoActions, dispath);


export default connect(mapStateToPro, mapDispatchToProps)(TodoLsit);
