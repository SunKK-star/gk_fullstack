import React, { FC, memo, ReactElement } from 'react'
import Item from '../List/item'
import { ITd } from '../../../typings'

interface IProps{
  todoList: ITd[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const List: FC<IProps> = ({
  todoList,
  removeTodo,
  toggleTodo
}): ReactElement => {
  return (
    <div className="todo-list">
      {
        todoList && todoList.map((todo: ITd) => {
          return (
            <Item key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
          )
        })
      }
    </div>
  )
}

export default memo(List)
