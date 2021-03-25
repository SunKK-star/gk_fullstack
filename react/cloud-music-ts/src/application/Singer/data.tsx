import React, { useReducer, createContext} from 'react'
import { fromJS, Record } from 'immutable'
import { keyType } from '../../typings'

export enum CATEGORY {
  CHANGE_CATEGORY = 'singers/CHANGE_CATEGORY',
  CHANGE_ALPHA = 'singers/CHANGE_ALPHA',
  CHANGE_CATEGORY_ID = 'singers/CHANGE_CATEGORY_ID',
  CHANGE_ALPHA_ID = 'singers/CHANGE_ALPHA_ID'
}


interface IAction {
  type: CATEGORY
  [extraProp: string]: any
}
// 分类接口
export interface IStates {
  category: keyType,
  alpha: string,
  categoryId: number,
  alphaId: number
}


export const CategoryDataContext = createContext({});


//categoryReducer 纯函数
const reducer = (state: Record<IStates>, action: IAction) => {
  switch (action.type) {
    case CATEGORY.CHANGE_CATEGORY:
      return state.set('category', action.payload);
    case CATEGORY.CHANGE_ALPHA:
      return state.set('alpha', action.payload);
    case CATEGORY.CHANGE_CATEGORY_ID:
      return state.set("categoryId", action.payload);
    case CATEGORY.CHANGE_ALPHA_ID:
      return state.set("alphaId", action.payload);
    default:
      return state;
  }
};


interface IProps {
  [props: string]: any
}

//Provider 组件
export const Data: React.FC<IProps> = (props): React.ReactElement => {
  //useReducer 的第二个参数中传入初始值
  const [data, dispatch] = useReducer(reducer, fromJS({
    category: { type: "-1", area: "-1" },
    alpha: "",
    categoryId: -1,
    alphaId: -1
  }));


  return (
    <CategoryDataContext.Provider value={{ data, dispatch }}>
      {props.children}
    </CategoryDataContext.Provider>
  )
}
