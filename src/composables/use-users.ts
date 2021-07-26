import { Randomuser, Result } from '@/interface/randomuser';
import IGetUserParams from '@/models/get-user-params';
import { ref } from 'vue';
import useApi from './use-api';

export default function useUsers() {
  const loading = ref(false);
  const error = ref<Randomuser['error']>();
  const users = ref<Result[]>();
  const { get } = useApi();
  async function getTable(query: IGetUserParams): Promise<Result[] | undefined> {
    loading.value = true;
    const randomuserUrl = new URL('https://randomuser.me/api');
    randomuserUrl.searchParams.set('results', query.numberOfUsers.toString());
    randomuserUrl.searchParams.set('gender', query.gender);
    try {
      const response = await get(randomuserUrl);
      const data = ref<Randomuser>();
      data.value = await response.json();
      if (data.value?.error) {
        error.value = data.value.error;
        const errormsg = `error ${response.status}: ${error.value}`;
        throw errormsg;
      }
      users.value = data.value?.results;
      return users.value;
    } catch (errormsg) {
      return errormsg;
    } finally {
      loading.value = false;
    }
  }
  return {
    loading, error, users, getTable,
  };
}
