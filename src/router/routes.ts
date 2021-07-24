import { RouteRecordRaw } from 'vue-router';
import RouteName from '@/constants/route-name';

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
];

export default routes;
