import Vue from 'vue'
import Router from 'vue-router'
import Image from './views/image'
import Main from './views/main'
import Movie from './views/movie'
import Talk from './views/talk'
import Home from './views/home'


import javaSE from './views/javaSE'
import vue from './views/vue'
import react from './views/react'
import node from './views/node'
import photoshop from './views/photoshop'
import linux from './views/linux'
import more from './views/more'
import angular from './views/angular'
import cc from './views/cc'

import aboutus from './views/aboutus'
import talkus from './views/talkus'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },{
      path: '/image',
      component: Image
    },{
      path: '/talk',
      component: Talk
    },{
      path: '/main',
      component: Main,
      children:[
          {
         	path:'/main/aboutus',
            component:aboutus
         },{
         	path:'/main/talkus',
            component:talkus
         }
      ]
    },{
      path: '/movie',
      component: Movie,
      children:[
         {
         	path:'/movie/javaSE',
            component:javaSE
         },{
         	path:'/movie/react',
            component:react
         },{
         	path:'/movie/vue',
            component:vue
         },{
         	path:'/movie/cc',
            component:cc
         },{
         	path:'/movie/node',
            component:node
         },{
         	path:'/movie/linux',
            component:linux
         },{
         	path:'/movie/angular',
            component:angular
         },{
         	path:'/movie/photoshop',
            component:photoshop
         },{
         	path:'/movie/more',
            component:more
         }
      ]
    },{
      path:'/',     //重定向
      redirect:'/home'
    }
  ]
})
