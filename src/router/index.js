import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'

// import loginRoutes from './login/login'

import AddFakeLink from '@/pages/AddFakeLink'
import CheckNews from '@/pages/CheckNews'
import CheckInfo from '@/pages/CheckInfo'

Vue.use(Router)


var routes = [
  {
    path: '/',
    name: 'CheckNews',
    component: CheckNews
  },
  {
    path: '/add-fake-news',
    name: 'AddFakeLink',
    component: AddFakeLink
  },
  {
    path: '/quiz-intro',
    name: 'CheckInfo',
    component: CheckInfo
  },
  {
    path: '/check',
    name: 'CheckNews',
    component: CheckNews
  }
];

// routes.push(...loginRoutes);

export default new Router({
  routes: routes,
  mode: 'history'
})
