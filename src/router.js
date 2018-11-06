import Vue from 'vue';
import Router from 'vue-router';
import StartupScreen from '@/views/StartupScreen.vue';
import Resume from '@/views/Resume.vue';

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
      component: Resume,
    },
  ],
});
