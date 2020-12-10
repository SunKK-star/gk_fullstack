const Add_ITEMNUM = 'Add_ITEMNUM'
const REMEMBER_ANSWER = 'REMEMBER_ANSWER'
export default {
  // 点击进入下一题
  [Add_ITEMNUM] (state, num) {
    state.itemNum += num
  },
  // 记录id
  [REMEMBER_ANSWER] (state, id) {
    state.answerId.push(id)
  }
}