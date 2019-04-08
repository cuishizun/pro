import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/home/home';
import login from '@/page/login/login';
import forget from '@/page/forget/forget';
import passwordset from '@/page/passwordset/passwordset';
import protocol from '@/page/protocol/protocol';
import copyright_direction from '@/page/copyright_direction/copyright_direction';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/passwordset',
      name: 'passwordset',
      component: passwordset
    },
    {
      path: '/protocol',
      name: 'protocol',
      component: protocol
    },
    {
      path: '/copyright_direction',
      name: 'copyright_direction',
      component: copyright_direction
    }
  ]
});
