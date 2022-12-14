import React, { useState } from 'react';

import { AiFillDelete } from 'react-icons/ai';
import style from '../css/TodoItem.module.css';

const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
  const viewMode = {};
  const editMode = {};
  const [titleOnEdit, setTitleOnEdit] = useState({
    title,
    isEditing: false,
  });

  // const [completedValue, setCompletedValue] = useState(completed);
  const completedStyle = {
    color: '#222',
    textDecoration: 'line-through',
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
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const dblHundler = () => {
    setTitleOnEdit((prev) => ({ ...prev, isEditing: !prev.isEditing }));
  };

  const keyDownHundler = (e) => {
    if (e.key === 'Enter') {
      setTitleOnEdit((prev) => ({ ...prev, isEditing: !prev.isEditing }));
      props.edithundler(id, titleOnEdit.title);
    }
  };
  return (
    <li key={id} className={style.itemlist}>
      <div
        className={style['list-container']}
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
