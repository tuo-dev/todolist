import React, { useState } from 'react';
import { Wrapper } from './components/styled';
import HeaderBox from './components/HeaderBox';
import TodoBoard from './components/TodoBoard';
function Todo() {
  const [todoItems, setTodoItems] = useState([]);
  const [selectCg, setSelectCg] = useState('전체');
  return (
    <>
      <Wrapper>
        <HeaderBox
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          setSelectCg={setSelectCg}
        ></HeaderBox>
        <TodoBoard
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          selectCg={selectCg}
          setSelectCg={setSelectCg}
        ></TodoBoard>
      </Wrapper>
    </>
  );
}

export default Todo;
