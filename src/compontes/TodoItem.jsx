import React from "react";
import { useState } from "react";
import style from "../css/TodoItem.module.css";
import { AiFillDelete } from "react-icons/ai";
const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
  let viewMode = {};
  let editMode = {};
  const [titleOnEdit, setTitleOnEdit] = useState({
    title: title,
    isEditing: false,
  });

  // const [completedValue, setCompletedValue] = useState(completed);
  const completedStyle = {
    color: "#222",
    textDecoration: "line-through",
  };
  const completedHundler = () => {
    props.completedStatusHundler(id);
  };

  const deleteHundler = () => {
    props.delHundlerProps(id);
  };

  const onChnageEdit = (e) => {
    setTitleOnEdit((prev) => ({ ...prev, title: e.target.value }));
  };

  if (titleOnEdit.isEditing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const dblHundler = () => {
    setTitleOnEdit((prev) => ({ ...prev, isEditing: !prev.isEditing }));
  };

  const keyDownHundler = (e) => {
    if (e.key === "Enter") {
      setTitleOnEdit((prev) => ({ ...prev, isEditing: !prev.isEditing }));
      props.edithundler(id, titleOnEdit.title);
    }
  };
  return (
    <li key={id}>
      <div
        className={style["list-container"]}
        onDoubleClick={dblHundler}
        style={viewMode}
      >
        <input
          type="checkbox"
          checked={completed}
          className={style.checkbox}
          onChange={completedHundler}
        />
        <span className={style.title} style={completed ? completedStyle : null}>
          {title}
        </span>
        <AiFillDelete className={style.delbutton} onClick={deleteHundler} />
      </div>
      <input
        type="text"
        value={titleOnEdit.title}
        className={style.inputTitle}
        onKeyDown={keyDownHundler}
        onChange={onChnageEdit}
        style={editMode}
      />
    </li>
  );
};

export default TodoItem;
