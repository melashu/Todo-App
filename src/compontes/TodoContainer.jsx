import React, { useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { HiMenu } from "react-icons/hi";
import SideBar from "./SideBar";
function TodoContainer() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Read about react route", completed: false },
    { id: 2, title: "Write article about Sekela.com", completed: false },
    { id: 3, title: "Learn about event handling", completed: false },
  ]);

  const [isShow, setShow] = useState(false);
  function addTodoItem(value) {
    const newTask = {
      id: todos.length + 1,
      title: value,
      completed: false,
    };
    setTodos((prev) => [...prev, newTask]);
  }

  function completedStatusHundler(id) {
    setTodos((prev) => {
      return prev.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }

  function deleteTaskHundler(id) {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  }

  function editHundler(id, title) {
    setTodos((prev) => {
      return prev.map((todo) => {
        return todo.id === id ? { ...todo, title: title } : todo;
      });
    });
  }

  function showMenu() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <HiMenu className="menu" onClick={showMenu} />
      <SideBar isShow={isShow} onClick={showMenu} />
      <div className="container" style={isShow ? { marginLeft: "220px" } : {}}>
        <Header />
        <TodoInput addTodoItem={addTodoItem} />
        <TodoList
          todos={todos}
          completedStatusHundler={completedStatusHundler}
          delHundlerProps={deleteTaskHundler}
          edithundler={editHundler}
        />
      </div>
    </>
  );
}

export default TodoContainer;
