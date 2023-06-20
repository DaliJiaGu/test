import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'normalize.css';
import '@/assets/css/index.less';
// import 'element-plus/lib/theme-chalk/index.css';
// import 'element-plus/lib/theme'

// createApp(App).use(store).use(router).mount('#app');
createApp(App).use(router).use(store).use(ElementPlus).mount('#app');
