import React, { FC, ReactElement } from 'react'
import { RouteConfig } from 'react-router-config'

interface Iprops {
  route: RouteConfig
}

const Home:FC<Iprops> = ({route}): ReactElement => {
  console.log(route.routes);
  
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default React.memo(Home)
