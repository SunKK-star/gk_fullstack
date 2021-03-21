import React, { FC, useEffect, useRef } from 'react'
import { alphaType, categoryType, keyType } from '../../typings'
import { HorizenItem, HorzienContainer } from './style'
import Scroll from '../MyScroll'
import {IHandleClick} from '../../application/Singer'

interface IProps<T> {
  list: T[];
  oldVal: number;
  title: string;
  handleClick: IHandleClick<string | keyType>
}
const Horizen: FC<IProps<alphaType | categoryType>> = (props) => {
  let { list, oldVal, title } = props
  const {handleClick} = props
  const Category = useRef<HTMLDivElement>(null);  
  useEffect(() => {
    let categoryDOM = Category.current;
    let totleWidth = 0;
    const tegs = categoryDOM!.querySelectorAll("span");
    Array.from(tegs).forEach( item => {
      totleWidth += item.offsetWidth + 1;
    })
    Category.current!.style.width = `${totleWidth}px`
  }, [])

 

  return (
    <Scroll direction="horizental">
      <div ref={Category}>
        <HorzienContainer>
          <span className="title">{title}</span>
          {
            list.map((item) => {
              return (
                <HorizenItem
                  key={item.id}
                  className={oldVal === item.id ? "selected" : ""}
                  onClick={() => handleClick(item.id, item.key)}
                >
                  {item.name}
                </HorizenItem>
              )
            })
          }
        </HorzienContainer>
      </div>
    </Scroll>
  )
}

export default React.memo(Horizen)
