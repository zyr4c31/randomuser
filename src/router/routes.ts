import { RouteRecordRaw } from 'vue-router';
import RouteName from '@/constants/route-name';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.Randomuser,
    component: () => import('../views/index.vue'),
  },
  {
    path: '/:page',
    name: RouteName.Table,
    component: () => import('../views/index.vue'),
    props: true,
  },
];

export default routes;
