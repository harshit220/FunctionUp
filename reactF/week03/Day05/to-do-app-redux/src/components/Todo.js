import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/action";

const Todo = ({ todo, toggleTodo }) => (
  <li
    className="todo-item"
    onClick={() => toggleTodo(todo.id)}
    style={{ display: "flex", alignItems: "center",width:"50%",justifyContent:"space-evenly",margin:"30px auto"}}
  >
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
    <button>{todo && todo.completed ? "✅Completed" : "⏳Pending"} </button>
  </li>
);

// export default Todo;
export default connect(null, { toggleTodo })(Todo);
