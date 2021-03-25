import { Redirect } from 'react-router-dom'
import {RouteConfig} from 'react-router-config'
import Home from '../application/Home'
import Rank from '../application/Rank'
import Recommend from '../application/Recommend'
import Singer from '../application/Singer'
import Album from '../application/Albun'


const routes: RouteConfig[] = [
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
        component: Recommend,
        routes: [
          {
            path: "/recommend/:id",
            component: Album
          }
        ]
      },
      {
        path: '/singer',
        component: Singer
      },
      {
        path: '/rank',
        component: Rank,
        key: "rank",
        routes: [
          {
            path: "/rank/:id",
            component: Album
          }
        ]
      },
    ]
  }
]


export default routes