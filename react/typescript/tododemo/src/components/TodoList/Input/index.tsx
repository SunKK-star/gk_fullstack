import React, { FC, ReactElement, memo, useRef } from 'react'
import { ITd } from '../../../typings'
interface IPros {
  addTo: (todo: ITd) => void;
  todoList: Array<ITd>
}

const Input: FC<IPros> = ({
  addTo,
  todoList
}): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null)
  const addItem = (): void => {
    const val: string = inputRef.current!.value.trim()
    if (val) {
      const isExist = todoList.some(todo => todo.value === val)
      if (isExist) {
        alert('已存在该项')
        return
      }
    } else {
      alert('不能为空！')
      return
    }
    addTo({
      id: new Date().getTime(),
      value: val,
      isDone: false
    })
    inputRef.current!.value = ''
  }
  return (
    <div className="todo-list">
      <input type="text" placeholder="请输入待办项" ref={inputRef} />
      <button onClick={addItem}>增加</  button>
    </div>
  )
}

export default memo(Input)

