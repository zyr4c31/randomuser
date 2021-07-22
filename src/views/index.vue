<template>
  <div v-show="!$route.params.page">
    <h1>{{ $route.name }}</h1>
    <Query :query="query" />
  </div>
  <div v-show="!$route.params.page">
    <Button v-show="!loading" @click="getUsers(query)" label="Get random users" />
    <ProgressSpinner v-if="loading" />
  </div>
  <p v-if="error">{{ error }}</p>
  <Users v-if="$route.params.page" :users="users" />
</template>

<script lang="ts">
import Query from '@/components/query.vue';
import Users from '@/components/users.vue';
import useUsers from '@/composables/use-users';
import Gender from '@/constants/gender';
import IGetUserParams from '@/models/get-user-params';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    Query, ProgressSpinner, Button, Users,
  },
  setup() {
    const query = ref<IGetUserParams>({
      numberOfUsers: 1,
      gender: Gender.empty,
    });
    const {
      loading, error, users, getUsers,
    } = useUsers();
    return {
      query, loading, error, users, getUsers,
    };
  },
});
</script>
