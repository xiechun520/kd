import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import News from '@/components/page/News'
import pro from '@/components/page/pro'
import content from '@/components/page/content'
import newsl from '@/components/page/newsl'

Vue.use(Router)

export default new Router({
	//mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/pro',
      name: 'pro',
      component: pro
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/newsl',
      name: 'newsl',
      component: newsl
    }
  ]
})
