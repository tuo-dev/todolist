import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { InputBox } from './styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function HeaderBox({ todoItems, setTodoItems, setSelectCg }) {
  const [nextId, setNextId] = useState(todoItems.length);
  const [addText, setAddText] = useState('');
  const [addToggle, setAddToggle] = useState(false);
  const [category, setCategory] = useState('기타');
  const today = new Date();
  const [selectDate, setSelectDate] = useState(new Date());
  const [cgBtn, setCgBtn] = useState(3);
  const inputRef = useRef();
  const onChange = (e) => {
    setAddText(e.target.value);
  };
  const toggleClick = () => {
    setAddToggle(!addToggle);
  };
  const addItem = () => {
    const nextItem = todoItems.concat({
      id: nextId,
      text: addText,
      checked: false,
      category: category,
      date: selectDate,
      fullText: false,
      pin: false,
      color: '#ccc',
    });
    setNextId(nextId + 1);
    setAddText('');
    setSelectCg('전체');
    addText && setTodoItems(nextItem);
    inputRef.current.focus();
  };
  const addEnter = (e) => {
    if (e.key == 'Enter') {
      e.stopPropagation();
      e.preventDefault();
      addItem();
    }
  };
  const toggleBtn = {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    position: 'absolute',
    right: '0',
    top: '85px',
    transform: 'translateY(-50%)',
    background: '#e5f9ff',
    boxShadow: addToggle
      ? '1px 1px 2px 0 #839093 ,-1px -1px 3px 0 #85969b'
      : '1px 1px 2px 0 #839093 ,-1px -1px 3px 0 #85969b',
    cursor: 'pointer',
    fontSize: '1.2rem',
    color: '#555',
    display: 'inline-block',
    zIndex: -1,
  };
  const span = {
    display: 'inline-block',
    transition: 'all 0.4s',
    transformOrigin: '50% 50%',
    transform: addToggle ? 'rotate(45deg) translate(-0.5px, 1px)' : 'rotate(0) translateY(1px)',
  };
  const buttons = [
    {
      id: 0,
      text: '공부',
    },
    {
      id: 1,
      text: '여행',
    },
    {
      id: 2,
      text: '쇼핑',
    },
    {
      id: 3,
      text: '기타',
    },
  ];
  const selectClick = (buttonIndex) => {
    setCgBtn(buttonIndex);
  };
  return (
    <InputBox>
      {!addToggle ? (
        <>
          <h1>Todo List</h1>
          <strong>{today.toISOString().split('T')[0]}</strong>
        </>
      ) : (
        <>
          <div className="selectBtns">
            <div className="moveBox">
              {buttons.map((button, index) => (
                <button
                  key={button.id}
                  className="btn"
                  value={button.text}
                  style={{
                    background: cgBtn == index ? '#c4e4ed' : 'transparent',
                  }}
                  onClick={(e) => {
                    setCategory(e.target.value);
                    selectClick(index);
                  }}
                >
                  {button.text}
                </button>
              ))}
              <DatePicker
                dateFormat="yyyy-MM-dd"
                selected={selectDate}
                popperPlacement="bottom-end"
                onChange={(date) => setSelectDate(date)}
              />
            </div>
          </div>
          <div className="addInputBox">
            <input
              type="text"
              value={addText}
              onChange={onChange}
              onKeyUp={addEnter}
              ref={inputRef}
              placeholder="To Do"
            />
            <button type="button" className="addBtn">
              <FontAwesomeIcon icon={faShare} onClick={addItem} />
            </button>
          </div>
        </>
      )}
      <button style={toggleBtn} onClick={toggleClick}>
        <span style={span}>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </button>
    </InputBox>
  );
}

export default HeaderBox;
