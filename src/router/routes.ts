import RouteName from '@/constants/route-name';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.Randomuser,
    component: () => import('../views/query-page.vue'),
  },
  {
    path: '/page=:page',
    name: RouteName.Table,
    component: () => import('../views/table.vue'),
    props: true,
  },
  {
    path: '/page=:page&user=:username',
    name: RouteName.User,
    component: () => import('../views/user.vue'),
    props: true,
  },
];

export default routes;
