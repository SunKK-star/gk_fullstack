import React, { FC, memo, ReactElement } from 'react'
import './index.less'

const Footer: FC = (): ReactElement => {
  return (
    <div>
      <input checked type="checkbox" />
      <span className="all_select">全选</span>
      <button style={{marginLeft: '50px'}} >删除已完成事件</button>
    </div>
  )
}

export default memo(Footer) 