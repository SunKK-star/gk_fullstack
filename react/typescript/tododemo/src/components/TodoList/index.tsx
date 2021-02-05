import React, { FC, ReactElement, memo, useReducer, useCallback, useEffect } from 'react'
import {todoReducer} from './reducer'
import { ITd, ACTION_TYPE } from '../../typings'
import TdInput from './Input'
import TdList from './List'
import TdFooter from '../Footer'


const TodoList: FC = (): ReactElement => {
 
  // const [todoList, settodoList] = useState<ITd[]>([])
  // const addTodo: GenericAddtodo = (todo: ITd): void => {
  //   settodoList(todoList => [...todoList, todo])
  // }
  
  const initState = {todoList: []}
  const [state, dispatch] = useReducer(todoReducer, initState)
  const addTodo = useCallback((todo: ITd) => {
    dispatch({
      type: ACTION_TYPE.ADD_ACTION,
      data: todo
    })
  }, [])
  const removeTodo = useCallback((id) => {
    dispatch({
      type: ACTION_TYPE.REMOVE_ACTION,
      data: id
    })
  }, [])
  const toggleTodo = useCallback((id) => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_ACTION,
      data: id
    })
  },[])
  useEffect(() => {
    console.log(state.todoList);
    
   }, [state.todoList])
  return (
    <div>
      <TdInput addTo={addTodo} todoList={state.todoList} />
      <TdList todoList={state.todoList} removeTodo={removeTodo} toggleTodo={toggleTodo} /> 
      <hr/>
      <TdFooter/>
    </div>
  )
}

export default memo(TodoList)