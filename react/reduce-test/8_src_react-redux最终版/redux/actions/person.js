import { ADD_PERSON } from '../constant'
// 创建增加一个person的action
export const add_person = (personObj) => ({type: ADD_PERSON, data: personObj})