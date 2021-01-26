import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import News from '@/views/News.vue'
const routes = [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
]

export default routes