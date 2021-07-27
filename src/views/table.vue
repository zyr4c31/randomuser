<template>
  <div class="users" >
    <DataTable :value="users" responsiveLayout="scroll" :paginator="true" :rows="6"
    @page="onPage($event)" @row-click="onRow($event)" paginatorTemplate="FirstPageLink PrevPageLink PageLinks
    NextPageLink LastPageLink JumpToPageDropdown CurrentPageReport" :pageLinkSize="10">
      <template #empty>
        <ProgressSpinner v-show="loading" />
        {{ error }}
      </template>
      <Column field="picture.large">
        <template #body="{ data }">
          <img :src="data.picture.large" :class="data.gender" width="60" />
        </template>
      </Column>
      <Column field="name.first" header="Name">
        <template #body="{ data }">
          <p>{{ data.name.first }} {{ data.name.last }}</p>
        </template>
      </Column>
      <Column field="email" header="Email">
      </Column>
      <Column field="phone" header="Phone">
      </Column>
      <Column field="location.timezone.description" header="Address">
        <template #body="{ data }">
          <p>{{ data.location.city }} City, {{ data.location.country }}</p>
       </template>
      </Column>
    </DataTable>
  </div>
  <Button @click="toQuery()" label="Back to Query" />
</template>

<script lang="ts">
import useUsers from '@/composables/use-users';
import Gender from '@/constants/gender';
import RouteName from '@/constants/route-name';
import { Result } from '@/interface/randomuser';
import IGetUserParams from '@/models/get-user-params';
import router from '@/router';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import ProgressSpinner from 'primevue/progressspinner';
import {
  defineComponent, onMounted, ref
} from 'vue';

export default defineComponent({
  name: 'Users',
  props: {
    numberOfUsers: { required: true, type: String },
    gender: { required: true, type: String },
    page: { required: true, type: String },
  },
  components: {
    ProgressSpinner, Button, DataTable, Column,
  },
  setup(props) {
    const genderProp: Gender = (<any>Gender)[props.gender];
    const query = ref<IGetUserParams>({
      gender: genderProp,
      numberOfUsers: parseInt(props.numberOfUsers, 10),
    });
    const { loading, users, error, getTable } = useUsers();
    onMounted(() => getTable(query.value));
    function toQuery() {
      router.push({ name: RouteName.Randomuser });
    }
    const pageNumber = ref(props.page);
    const maxPage = ref(1);

    function onPage(event: any) {
      pageNumber.value = event.page + 1;
      maxPage.value = event.pageCount;
      router.push({
        name: RouteName.Table,
        params: {
          numberOfUsers: props.numberOfUsers,
          gender: props.gender,
          page: pageNumber.value,
        },
      });
    }

    function onRow(event: any) {
      const user = ref<Result>(event.data);
      router.push({ name: RouteName.User, params: { user: JSON.stringify(user.value), username: user.value.name.first } });
    }
    return {
      loading, users, error, toQuery, onPage, onRow,
    };
  },
});
</script>
