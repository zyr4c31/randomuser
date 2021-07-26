<template>
  <div>
    <img :src="userProp.picture.large" :class="userProp.gender">
    <h1>{{ userProp.name.title}} {{ userProp.name.first}} {{ userProp.name.last}}</h1>
    <Button @click="goBack()" label="Back to Table" />
  </div>
</template>

<script lang="ts">
import { Result } from '@/interface/randomuser';
import router from '@/router';
import Button from 'primevue/button';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'User',
  components: { Button },
  props: {
    user: { required: true, type: String },
  },
  setup(props) {
    const userProp: Result = JSON.parse(props.user);
    function goBack() {
      router.back();
    }
    return { props, userProp, goBack };
  },
});
</script>
