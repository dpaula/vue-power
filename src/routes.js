import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'

export const routes = [

    //rota para localhost:8080/#/ apontando para componente Home
    { path: '', component: Home },
    //rota para localhost:8080/#/cadastro apontando para componente Home
    { path: '/cadastro', component: Cadastro }
];