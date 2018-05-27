import Vue from 'vue'
import Router from 'vue-router'

// import app pages
import Home from '../components/Home'
import Admin from '../components/Admin'
import Login from '../components/Admin/Login'
import SignUp from '../components/Admin/Signup'

// import admin page components
import Users from '../components/Admin/content/Users'
import UserNew from '../components/Admin/content/UserNew'
import Posts from '../components/Admin/content/Posts'
import PostNew from '../components/Admin/content/PostNew'
import PostEdit from '../components/Admin/content/PostEdit'
import Settings from '../components/Admin/content/Settings'
import Pages from '../components/Admin/content/Pages'
import Media from '../components/Admin/content/Media'
// import home page components
import PostView from '../components/Home/content/PostView'
import PostMain from '../components/Home/content/PostMain'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name:'Posts',
          component: PostMain
        },
        {
          path: '/post/view/:key',
          name: 'PostView',
          component: PostView
        },
        {
          path: 'sistemas/regulares',
          component: PostMain
        },
        {
          path: 'sistemas/cinu',
          component: PostMain
        },
        {
          path: 'sistemas/egresados',
          component: PostMain
        },
        {
          path: 'sistemas/docentes',
          component: PostMain
        },
        {
          path: 'electrica/regulares',
          component: PostMain
        },
        {
          path: 'electrica/cinu',
          component: PostMain
        },
        {
          path: 'electrica/docentes',
          component: PostMain
        },
        {
          path: 'enfermeria/regulares',
          component: PostMain
        },
        {
          path: 'enfermeria/cinu',
          component: PostMain
        },
        {
          path: 'administracion/regulares',
          component: PostMain
        },
        {
          path: 'administracion/cinu',
          component: PostMain
        },
        {
          path: 'economia/regulares',
          component: PostMain
        },
        {
          path: 'economia/cinu',
          component: PostMain
        },
        {
          path: 'agronomia/regulares',
          component: PostMain
        },
        {
          path: 'agronmia/cinu',
          component: PostMain
        },
        {
          path: 'pasantias',
          component: PostMain
        },
        {
          path: 'servicio-comunitario',
          component: PostMain
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'posts',
          component: Posts,
          children: [
            {
              path: 'new',
              component: PostNew
            },
            {
              path: 'edit/:key',
              component: PostEdit
            }
          ]
        },
        {
          path: 'settings',
          component: Settings
        },
        {
          path: 'pages',
          component: Pages
        },
        {
          path: 'media',
          component: Media
        },
        {
          path: 'users',
          component: Users,
          children: [
            {
              path: 'new',
              component: UserNew
            }

          ]
        }
      ]
    },
    {
      path: '*',
      name: 'default',
      component: Home
    }
  ]
})
