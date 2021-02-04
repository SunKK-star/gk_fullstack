import React, { FC, memo, ReactElement } from 'react';
import { ITd } from '../../../typings';

interface IProps {
  todo: ITd,
  toggleTodo: (id: number) => void,
  removeTodo: (id: number) => void
}

const Item: FC<IProps> = ({
  todo,
  toggleTodo,
  removeTodo
}): ReactElement => {
  const { id, value, isDone } = todo
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => toggleTodo(id)}
      />
      <span
        style={{ textDecoration: isDone ? 'line-through' : 'none' }}
      >{value}</span>
      <button onClick={() => removeTodo(id)}>删除</button>
    </div>
  )
}
export default memo(Item)