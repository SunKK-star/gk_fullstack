import React, { FC, ReactElement } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { Top, Tab } from './style'
import { NavLink } from 'react-router-dom'


const Home: FC<RouteConfigComponentProps> = ({
  route
}): ReactElement => {
  
  return (
    <>
      <Top>
        <span className="iconfont menu">&#xe602;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe629;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><span>推荐</span></NavLink>
        <NavLink to="/singers" activeClassName="selected"><span>歌手</span></NavLink>
        <NavLink to="/rank" activeClassName="selected"><span>排行榜</span></NavLink>
      </Tab>
      {renderRoutes(route!.routes)}
    </>
  )
}

export default React.memo(Home)
