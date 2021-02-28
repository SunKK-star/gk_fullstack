import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import {RouteConfig} from 'react-router-config'
import Home from '../application/Home'
import Rank from '../application/Rank'
import Recommend from '../application/Recommend'
import Singer from '../application/Singer'

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => (
          <Redirect to={'/recommend'}/>
        )
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/singer',
        component: Singer
      },
      {
        path: '/rank',
        component: Rank
      },
    ]
  }
]


export default routes