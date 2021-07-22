<template>
  <div class="users" >
    <DataTable :value="props.users" responsiveLayout="scroll" :paginator="true"
    :rows="6" @page="onPage($event)" paginatorTemplate="FirstPageLink PrevPageLink PageLinks
    NextPageLink LastPageLink JumpToPageDropdown CurrentPageReport" pageLinkSize="10">
      <template #loading>
        Loading customers data. Please wait.
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
      <Column field="location.timezone.description" header="Address">
        <template #body="{ data }">
          <p>{{ data.location.city }} City, {{ data.location.country }}</p>
       </template>
      </Column>
    </DataTable>
    <Button @click="toQuery()" label="Back to Query" />
  </div>
</template>

<script lang="ts">
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { Result } from '@/interface/randomuser';
import router from '@/router';
import RouteName from '@/constants/route-name';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'Users',
  components: { Button, DataTable, Column },
  props: {
    users: {
      required: true,
      type: Object as PropType<Result[]>,
    },
  },
  setup(props) {
    function toQuery() {
      router.push({ name: RouteName.Randomuser });
    }
    const pageNumber = ref(1);
    const maxPage = ref(1);

    function onPage(event: any) {
      pageNumber.value = event.page + 1;
      maxPage.value = event.pageCount;
      router.push({ name: RouteName.Table, params: { page: pageNumber.value } });
    }
    return { props, toQuery, onPage };
  },
});
</script>
