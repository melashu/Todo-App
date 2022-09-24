import React from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  return (
    <>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            completedStatusHundler={props.completedStatusHundler}
            delHundlerProps={props.delHundlerProps}
            edithundler={props.edithundler}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
