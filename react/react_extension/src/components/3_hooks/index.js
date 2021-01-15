import React from 'react'
export default function Demo() {


  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    console.log('@');
  },[count])
  function add() {
    setCount(count + 1) 
  }
  return (
    <div>
      <h1>当前求和为：{count}</h1>
      <button onClick={add}>点我+1</button>
    </div>
  )
}