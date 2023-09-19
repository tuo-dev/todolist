import React, { useState, useRef } from 'react';
import { TodoItemBox } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faPenToSquare,
  faThumbtack,
  faCheck,
  faXmark,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';
import ColorBox from './ColorBox';
function TodoItem({ todoItems, setTodoItems, todoItem }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState('');
  const [colorShow, setColorShow] = useState(false);
  const [labelColor, setLabelColor] = useState('#ccc');
  const editInput = useRef();
  const onChangeCheckbox = () => {
    const newTodo = todoItems.map((item) => ({
      ...item,
      checked: item.id == todoItem.id ? !item.checked : item.checked,
    }));
    setTodoItems(newTodo);
  };
  const fullTextToggle = (e) => {
    const newTodo = todoItems.map((item) => ({
      ...item,
      fullText: item.id == todoItem.id ? !item.fullText : item.fullText,
    }));
    setTodoItems(newTodo);
  };
  const pinToggle = () => {
    const newTodo = todoItems.map((item) => ({
      ...item,
      pin: item.id == todoItem.id ? !item.pin : item.pin,
    }));
    const index = newTodo.findIndex((item) => item.id == todoItem.id);
    const indexItem = newTodo[index];

    newTodo.splice(index, 1);

    indexItem.pin ? newTodo.unshift(indexItem) : newTodo.push(indexItem);
    setTodoItems(newTodo);
  };
  const editComplete = () => {
    const newTodo = todoItems.map((item) => ({
      ...item,
      text: item.id == todoItem.id ? editText : item.text,
      checked: item.id == todoItem.id ? false : item.checked,
    }));
    {
      editText
        ? (() => {
            setTodoItems(newTodo);
            setEditing(false);
            setEditText('');
          })()
        : (() => {
            alert('내용을 입력해주세요');
            editInput.current.focus();
          })();
    }
  };
  const removeItem = () => {
    const newTodo = todoItems.filter((item) => item.id !== todoItem.id);
    setTodoItems(newTodo);
  };
  const colorToggle = () => {
    setColorShow(!colorShow);
  };
  const colorChange = (e) => {
    setLabelColor(e.target.value);
  };
  const onColorChange = () => {
    setColorShow(false);
    const newTodo = todoItems.map((item) => ({
      ...item,
      color: todoItem.id === item.id ? labelColor : item.color,
    }));
    setTodoItems(newTodo);
  };
  const tiTxtStyle = {
    textDecoration: todoItem.checked ? 'line-through' : 'none',
    color: todoItem.checked ? '#999' : '#394042',
    whiteSpace: todoItem.fullText ? 'normal' : 'nowrap',
    wordWrap: todoItem.fullText ? 'none' : 'break-word',
  };
  const pinStyle = {
    paddingTop: '2px',
    color: todoItem.pin ? '#f90' : '#394042',
    fontSize: todoItem.pin ? '1.1rem' : '0.9rem',
  };
  return (
    <>
      <TodoItemBox>
        <input
          type="checkbox"
          className="tiChk"
          onChange={onChangeCheckbox}
          checked={todoItem.checked && !editing}
          disabled={editing}
        />

        {editing ? (
          <>
            <input
              type="text"
              className="tiEdit"
              ref={editInput}
              value={editText}
              onChange={(e) => {
                setEditText(e.target.value);
              }}
            />
            <div className="tiBtns">
              <button type="button">
                <FontAwesomeIcon icon={faCheck} onClick={editComplete} />
              </button>
              <button type="button">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => {
                    setEditing(false);
                    setEditText('');
                  }}
                />
              </button>
              <button type="button" onClick={removeItem}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="tiInfo" style={{ borderRight: `3px solid ${todoItem.color}` }}>
              <span className="tiCg">{todoItem.category}</span>
              <div className="tiColor">
                <span onClick={colorToggle}>
                  <FontAwesomeIcon icon={faPalette} />
                </span>
                {colorShow && <ColorBox colorChange={colorChange} onColorChange={onColorChange} />}
              </div>
              <span className="tiDate">{todoItem.date.toISOString().split('T')[0]}</span>
            </div>
            <span className="tiTxt" onClick={fullTextToggle} style={tiTxtStyle}>
              {todoItem.text}
            </span>
            <div className="tiBtns">
              <button type="button" style={pinStyle} onClick={pinToggle}>
                <FontAwesomeIcon icon={faThumbtack} />
              </button>
              <button
                type="button"
                style={{ paddingLeft: '2px' }}
                onClick={() => {
                  setEditing(true);
                }}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button type="button" onClick={removeItem}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </>
        )}
      </TodoItemBox>
    </>
  );
}

export default TodoItem;
