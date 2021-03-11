import React from 'react'
import {renderRoutes} from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './routes'
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'

export default function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <IconStyle />
      {renderRoutes(routes)}
    </HashRouter>
  )
}
