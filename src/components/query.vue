<template>
  <div class="query">
  <InputNumber v-model.number="props.query.numberOfUsers" mode="decimal" :min="0" :max="5000" />
  <Slider v-model="props.query.numberOfUsers" :min="1" :max="5000" />
  <br>
  <Dropdown v-model="props.query.gender" :options="genders" placeholder="Select a gender" />
  </div>
</template>

<script lang="ts">
import Gender from '@/constants/gender';
import IGetUserParams from '@/models/get-user-params';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputtext';
import Slider from 'primevue/slider';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'Query',
  props: {
    query: { required: true, type: Object as PropType<IGetUserParams> },
  },
  components: { Slider, Dropdown, InputNumber },
  setup(props) {
    const genders = ref([Gender.all, Gender.male, Gender.female]);
    return { props, genders };
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
