import React, { Component } from 'react'


export default class List extends Component {
  render() { 
    const { users, isFirst, isLoading, err} = this.props
    return (
      <div className="row">
        {
          isFirst ? <h1>欢迎使用，输入关键字，随后点击搜索。</h1> :
          isLoading ? <h2>Loading...</h2> : 
          err ? <h2 style={{color: "red"}}>{err}</h2> :
          users.map((item) => {
            return (
              <div key={item.id} className="card">
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img alt="avatar" src={item.avatar_url} style={{ width: "100px" }} />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
