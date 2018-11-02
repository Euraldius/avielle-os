import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import StartupScreen from '@/views/StartupScreen.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: StartupScreen,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/resume',
    //   name: 'resume',
    //   component: Resume,
    // },
  ],
});
