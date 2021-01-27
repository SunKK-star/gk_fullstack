
const initState = 66
export default function count(preState = initState, action) {
  console.log(preState, action);
  const {type, data} = action
  switch (type) {
    case "jia":
      return preState + data
    case "jian":
      return preState - data
    default:
      return preState
  }
}