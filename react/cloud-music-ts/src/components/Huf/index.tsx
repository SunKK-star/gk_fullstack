import React, { FC } from 'react'

interface IProps {
}

const hocProps = {
  inputSetting: {
    maxLength: 30,
    placehoder: '请输入代办事项'
  }
}

type InjectProps = Partial<typeof hocProps>

const Huf: FC<IProps> = (props) => {
   
   
  return (
    <div>
      {props.children}
    </div>
  )
}

export default React.memo(Huf)
