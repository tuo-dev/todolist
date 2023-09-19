import { TodoBoardBox } from './styled';
import TodoItem from './TodoItem';

function TodoBoard({ todoItems, setTodoItems, selectCg, setSelectCg }) {
  const filterCategory =
    selectCg == '전체' ? todoItems : todoItems.filter((item) => item.category == selectCg);
  return (
    <TodoBoardBox>
      {todoItems.length > 0 ? (
        <select
          value={selectCg}
          onChange={(e) => {
            setSelectCg(e.target.value);
          }}
        >
          <option value="전체">전체</option>
          <option value="공부">공부</option>
          <option value="여행">여행</option>
          <option value="쇼핑">쇼핑</option>
          <option value="기타">기타</option>
        </select>
      ) : (
        <span className="nothing">할 일을 등록해주세요</span>
      )}
      <ul>
        {filterCategory.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            todoItems={todoItems}
            setTodoItems={setTodoItems}
          />
        ))}
      </ul>
    </TodoBoardBox>
  );
}

export default TodoBoard;
