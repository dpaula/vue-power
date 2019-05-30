import Vue from 'vue'
import App from './App.vue'

// importando a dependência vue-resource que já foi instalada e localizada no node_modules
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import msg from './pt_BR';
import VeeValidate, { Validator } from  'vee-validate';

// usar chaves para importar um constante exportada
import { routes } from "./routes";

import './directives/Transform';


// registrando o uso da dependência
Vue.use(VueResource);
// definindo a url base para as configurações do vue
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

// criando um roteador com auxilio do componente vue-router, usando as configurações das routers.js importada
const router = new VueRouter({ routes });

Vue.use(VeeValidate);
Validator.localize('pt_BR', msg);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
