<template>
  <div class="query">
  <InputText v-model.number="props.query.numberOfUsers" />
  <Slider v-model="props.query.numberOfUsers" :min="1" :max="5000"/>
  <br>
  <Dropdown v-model="props.query.gender" :options="genders" placeholder="Select a gender" />
  </div>
</template>

<script lang="ts">
import useUsers from '@/composables/use-users';
import Gender from '@/constants/gender';
import IGetUserParams from '@/models/get-user-params';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Slider from 'primevue/slider';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'Query',
  props: {
    query: {
      required: true,
      type: Object as PropType<IGetUserParams>,
    },
  },
  components: {
    Slider, Dropdown, InputText,
  },
  setup(props) {
    const genders = ref([Gender.all, Gender.male, Gender.female]);
    const { loading } = useUsers();
    return { props, genders, loading };
  },
});
</script>

<style scoped>
.query, p.slider, p.inputtext, p.dropdown{
  width: 12.8rem;
  display: inline-block;
  margin-bottom: 2px;
  border-radius: 25px;
}
</style>
