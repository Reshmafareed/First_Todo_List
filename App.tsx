import React from "react";
import "./App.css";

const TodoList = () => {
  return (
    <div className="todo-list">
      <h1>TODO LIST</h1>
      <form>
        <input type="text" placeholder="Add new todo" />
        <button type="submit" style={{marginLeft: "auto", marginRight: "auto", display: "block", marginTop: "10px"}}>Add</button>
      </form>
      <ul>
        <li>
          <span>Todo 1</span>
          <button>Edit</button>
          <button>Delete</button>
        </li>

        <li>
          <span>Todo 2</span>
          <button>Edit</button>
          <button>Delete</button>
        </li>

        <li>
          <span>Todo 3</span>
          <button>Edit</button>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;