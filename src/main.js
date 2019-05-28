import Vue from 'vue'
import App from './App.vue'

// importando a dependência vue-resource que já foi instalada e localizada no node_modules
import VueResource from 'vue-resource';

// registrando o uso da dependência
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
