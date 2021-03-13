import React, { FC } from 'react'

interface IProps {
}

const Huf: FC<IProps> = (props) => {
   
   
  return (
    <div>
      {props.children}
    </div>
  )
}

export default React.memo(Huf)
