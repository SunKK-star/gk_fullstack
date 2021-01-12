import React, { Component } from 'react'

const messageArr = [
  {id: '01', title: '你好，中国'},
  {id: '02', title: '你好，尚硅谷'},
  {id: '03', title: '你好，未来的自己'},
] 


export default class Detail extends Component {
  render() {

    const {id, title} = this.props.location.state || {}
    const messageContent = messageArr.find((item) => {
      return item.id === id
    }) || {}
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {messageContent.title}</li>
      </ul>
    )
  }
}
