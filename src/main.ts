import './assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

import { auth0Plugin } from '@/plugins';

const app = createApp(App);

app.use(auth0Plugin);

app.mount('#app');
