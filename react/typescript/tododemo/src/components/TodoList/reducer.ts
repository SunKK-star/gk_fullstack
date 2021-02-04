import { IAction, IState, ACTION_TYPE, ITd } from "../../typings";


export function todoReducer(state: IState, action: IAction): IState {
  const { type, data } = action;
  switch (type) {
    case ACTION_TYPE.ADD_ACTION:
      return {
        ...state,
        todoList:[...state.todoList,data as ITd]
      }
    case ACTION_TYPE.REMOVE_ACTION: 
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== data as number)
      }
    case ACTION_TYPE.TOGGLE_ACTION:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          return todo.id === data as number? 
            {
              ...todo,
              isDone: !todo.isDone,
            } :
            {
              ...todo
            }
        })
      }
    default:
      return state;
  }
}