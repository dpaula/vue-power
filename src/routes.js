
// carregando o componente assincronamente, somente quando a rota for acessada, pois neste caso será quebrado em outro bundle, evitando carregar tudo ao mesmo tempo
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');

import Home from './components/home/Home.vue'

export const routes = [

    //rota para localhost:8080/#/ apontando para componente Home
    { name: 'home', path: '', component: Home, titulo: 'Home', id: 1 , menu: true},
    //rota para localhost:8080/#/cadastro apontando para componente Home
    { name: 'cadastro', path: '/cadastro', component: Cadastro, titulo: 'Cadastro', id: 2, menu: true},
    //rota para localhost:8080/#/cadastro apontando para componente Home
    { name: 'alterar', path: '/cadastro/:id', component: Cadastro, titulo: 'Alterar', id: 3, menu: false},
    // definindo que qualquer rota, redireciona para a Home
    { path: '*', component: Home, menu: false}
];