<template>
  <div v-show="!$route.params.page">
    <h1>{{ $route.name }}</h1>
    <Query :query="query" />
  </div>
  <div v-show="!$route.params.page">
    <Button v-show="!loading" @click="toTable()" label="Get random users" />
  </div>
  <p v-if="error">{{ error }}</p>
  <Users v-if="$route.params.page" :users="users" />
</template>

<script lang="ts">
import Query from '@/components/query.vue';
import Users from '@/components/users.vue';
import useUsers from '@/composables/use-users';
import Gender from '@/constants/gender';
import RouteName from '@/constants/route-name';
import IGetUserParams from '@/models/get-user-params';
import router from '@/router';
import Button from 'primevue/button';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    Query, Button, Users,
  },
  setup() {
    const query = ref<IGetUserParams>({
      numberOfUsers: 1,
      gender: Gender.empty,
    });
    const {
      loading, error, users,
    } = useUsers();
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
