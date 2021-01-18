import React from 'react'
import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {GlobalStyle} from './style'
import routes from './routes'

export default function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      {renderRoutes(routes)}
    </HashRouter>
  )
}