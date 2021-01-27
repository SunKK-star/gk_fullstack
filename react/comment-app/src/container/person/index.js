import React, { Component } from 'react'
import { connect } from 'react-redux'
import {add_person} from '../../redux/actions/person'
import { nanoid } from "nanoid"

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = { id: nanoid(), name, age }
    this.props.add_person(personObj)
    this.nameNode.value = ""
    this.ageNode.value = ""
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>我是Person组件，当前求和为：{}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          
         
                
              
         
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ personArr: state.persons, count: state.count }),

  {add_person}
 
)(Person)
