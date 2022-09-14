import React, { useState } from "react";

import style from "../css/TodoInput.module.css";
import { IoMdAddCircle } from "react-icons/io";

const TodoInput = (props) => {
  const [todoTitle, setTodoTitle] = useState({ title: "rr" });
  const [title, setTitle] = useState("");

  function addTodoHUndler(e) {
    e.preventDefault();
    props.addTodoItem(title);
  }

  const updateInput = (e) => {
    setTodoTitle((val) => ({
      ...val,
      title: e.target.value,
    }));
  };
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <form className={style.form} onSubmit={addTodoHUndler}>
        <input
          type="text"
          placeholder="Add your todo"
          value={title}
          onChange={changeTitle}
          required
        />

        <button type="submit">
          <IoMdAddCircle className={style.add} />
        </button>
      </form>
    </>
  );
};

export default TodoInput;
