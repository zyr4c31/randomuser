import RouteName from '@/constants/route-name';
import { Randomuser, Result } from '@/interface/randomuser';
import IGetUserParams from '@/models/get-user-params';
import router from '@/router';
import { ref } from 'vue';
import useApi from './use-api';

export default function useUsers() {
  const randomuserUrl = new URL('https://randomuser.me/api');
  const loading = ref(false);
  const error = ref<Randomuser>();
  const data = ref<Randomuser>();
  const users = ref<Result[]>();
  const { get } = useApi();
  async function getUsers(query: IGetUserParams) {
    loading.value = true;
    randomuserUrl.searchParams.set('results', query.numberOfUsers.toString());
    randomuserUrl.searchParams.set('gender', query.gender);
    try {
      data.value = await get(randomuserUrl);
      if (!data.value?.results) {
        error.value = data.value;
        throw (error.value);
      }
      users.value = data.value.results;
      router.push({ name: RouteName.Table, params: { page: '1' } });
      return users.value;
    } catch {
      return error.value;
    } finally {
      loading.value = false;
    }
  }
  return {
    loading, error, users, getUsers,
  };
}
