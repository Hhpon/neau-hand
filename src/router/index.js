import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Build from '@/components/Build'
import Organization from '@/components/Organization'
import Entrepreneurship from '@/components/Entrepreneurship'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/build',
      children: [
        { path: '/build', name: 'Build', component: Build },
        { path: '/organization', name: 'Organization', component: Organization },
        { path: '/entrepreneurship', name: 'Entrepreneurship', component: Entrepreneurship },
      ]
    }
  ]
})
