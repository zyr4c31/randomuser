import { Randomuser, Result } from '@/interface/randomuser';
import IGetUserParams from '@/models/get-user-params';
import { ref } from 'vue';
import useApi from './use-api';

export default function useUsers() {
  const randomuserUrl = new URL('https://randomuser.me/api');
  const loading = ref(false);
  const error = ref<Randomuser>();
  const data = ref<Randomuser>();
  const users = ref<Result[]>();
  const { call } = useApi();
  async function get(query: IGetUserParams): Promise<Randomuser | Result[] | undefined> {
    loading.value = true;
    randomuserUrl.searchParams.set('results', query.numberOfUsers.toString());
    randomuserUrl.searchParams.set('gender', query.gender);
    try {
      data.value = await call(randomuserUrl);
      if (!data.value?.results) {
        error.value = data.value;
        throw (error.value);
      }
      users.value = data.value.results;
      return users.value;
    } catch {
      return error.value;
    } finally {
      loading.value = false;
    }
  }
  return {
    loading, error, users, get,
  };
}
