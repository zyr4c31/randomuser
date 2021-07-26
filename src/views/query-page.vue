<template>
  <div>
    <h1>{{ $route.name }}</h1>
    <Query :query="query" />
  </div>
  <div>
    <Button @click="toTable()" label="Get random users" />
  </div>
</template>

<script lang="ts">
import Query from '@/components/query.vue';
import useUsers from '@/composables/use-users';
import Gender from '@/constants/gender';
import RouteName from '@/constants/route-name';
import IGetUserParams from '@/models/get-user-params';
import router from '@/router';
import Button from 'primevue/button';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    Query, Button,
  },
  setup() {
    const query = ref<IGetUserParams>({ numberOfUsers: 1, gender: Gender.empty });
    const { loading, error, users } = useUsers();
    function toTable() {
      router.push({
        name: RouteName.Table,
        params: {
          numberOfUsers: query.value.numberOfUsers.toString(),
          gender: query.value.gender,
          page: '1',
        },
      });
    }
    return {
      query, loading, error, users, toTable,
    };
  },
});
</script>
