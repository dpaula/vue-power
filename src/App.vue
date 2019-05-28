<!-- // Este é um SFT (Single File Template) que é um arquivo vue que define 3 partes: template, script e style -->

<template>
<div>
    <!-- usando interpolação para acesso dos dados, neste caso o titulo -->
    <h1>{{ titulo }}</h1>
    <!-- usando v-bind para acesso direto a um objeto dentro dos dados -->

    <ul>
        <li v-for="foto of fotos" :key="foto.id">
            <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            titulo: "App Power",
            fotos: []
        };
    }, 

    created () {

        // usando método o vue-resource para dar um get via http
        this.$http.get('http://localhost:3000/v1/fotos')
            // como retorna uma promise, busco resposta, que é um json
            .then(res => res.json())
            // como ainda retorna uma promise, busco as fotos, imprimindo no log caso der erro
            .then(fotos => this.fotos = fotos, err => console.log(err));
    },
};
</script>

<style>
</style>
