import '@/plugins/primevue';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.mount('#app');
