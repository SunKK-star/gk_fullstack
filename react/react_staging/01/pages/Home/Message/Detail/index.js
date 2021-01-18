import React, { Component } from 'react'

const messageArr = [
  {id: '01', title: '你好，中国'},
  {id: '01', title: '你好，中国'},
  {id: '02', title: '你好，尚硅谷'},
  {id: '02', title: '你好，尚硅谷'},
  {id: '03', title: '你好，未来的自己'},
  {id: '03', title: '你好，未来的自己'}
] 


export default class Detail extends Component {
  render() {
    const {id, title} = this.props.match.params
    const findResult = messageArr.find((obj) => {
      return id === obj.id
    })
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.title}</li>
      </ul>
    )
  }
}
