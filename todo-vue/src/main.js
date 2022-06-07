import Vue from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import axios from 'axios'
import Todos from "./components/Todos-app"



Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            component: Todos,
            name: 'home'
        }
    ]
});

// pass the router to the app config
new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app');


