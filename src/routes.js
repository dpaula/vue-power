import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'

export const routes = [

    //rota para localhost:8080/#/ apontando para componente Home
    { name: 'home', path: '', component: Home, titulo: 'Home', id: 1 , menu: true},
    //rota para localhost:8080/#/cadastro apontando para componente Home
    { name: 'cadastro', path: '/cadastro', component: Cadastro, titulo: 'Cadastro', id: 2, menu: true},
    // definindo que qualquer rota, redireciona para a Home
    { path: '*', component: Home, menu: false}
];