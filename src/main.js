import './assets/sass/main.sass';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';

import App from './App.vue';
import router from './router';


axios.defaults.baseURL = 'https://api.smok.best';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
