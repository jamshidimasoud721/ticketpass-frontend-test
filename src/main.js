import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
const app = createApp(App);

app.config.globalProperties.$filters = {
    formatDate(value) {
        const date = new Date(value);
        return date.toLocaleString();
    }
};

createApp(App).use(router).mount('#app')
