import Vue from 'vue'
import App from './App.vue'

// importando a dependência vue-resource que já foi instalada e localizada no node_modules
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// usar chaves para importar um constante exportada
import { routes } from "./routes";

import './directives/Transform';

// registrando o uso da dependência
Vue.use(VueResource);
Vue.use(VueRouter);

// criando um roteador com auxilio do componente vue-router, usando as configurações das routers.js importada
const router = new VueRouter({ routes });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
