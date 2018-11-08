import Vue from 'vue';
import Router from 'vue-router';
import StartupScreen from '@/views/StartupScreen.vue';
import Resume from '@/views/Resume.vue';
import Clients from '@/views/Clients.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: StartupScreen,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients,
    },
    {
      path: '/clients/:name',
      name: 'client',
      component: Clients,
    },
  ],
});
