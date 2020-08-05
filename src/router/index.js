import Vue from 'vue';
import Router from 'vue-router';

import {
  Home,
  Topic,
  TermsAndConditions,
  PrivacyPolicy,
  Landing,
  Explore,
  ForYou,
} from './views/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome-to-banter',
      component: Landing,
      meta: { layout: 'landing' },
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props: (route) => ({ loginSuccess: route.query.success, loginError: route.query.error }),
    },
    {
      path: '/topics/:topicName',
      name: 'Topic',
      component: Topic,
    },
    {
      path: '/topics/:topicName/:topicId',
      name: 'Topic',
      component: Topic,
    },
    {
      path: '/foryou',
      name: 'ForYou',
      component: ForYou,
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore,
    },
    {
      path: '/privacy',
      name: 'Privacy Policy',
      component: PrivacyPolicy,
    },
    {
      path: '/terms',
      name: 'Terms and Conditions',
      component: TermsAndConditions,
    },
  ],
});
