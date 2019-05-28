import Vue from 'vue'
import App from './App.vue'

// importando a dependência vue-resource que já foi instalada e localizada no node_modules
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// registrando o uso da dependência
Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
