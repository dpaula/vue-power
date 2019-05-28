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
            fotos: [{
                    id: 1,
                    url: "http://www.sebrae.com.br/Sebrae/Portal%20Sebrae/UFs/AP/Imagens/tecnologia.png",
                    titulo: "Tecnologia"
                },
                {
                    id: 2,
                    url: "http://grupoatta.com.br/site/wp-content/uploads/2016/09/politico.jpg",
                    titulo: "Politica"
                }
            ]
        };
    }
};
</script>

<style>
</style>
