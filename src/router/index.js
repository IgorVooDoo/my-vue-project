import Vue from 'vue'
import Router from 'vue-router'
import CalendarForm from '@/components/CalendarForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CalendarForm',
      component: CalendarForm
    }
  ]
})
