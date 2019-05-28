<template>
  <div>
    <!-- usando interpolação para acesso dos dados, neste caso o titulo -->
    <h1>{{ titulo }}</h1>
      <!-- usando v-bind para acesso direto a um objeto dentro dos dados -->
    <img
      :src="foto.url"
      :alt="foto.titulo"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'App Power',
      foto: {
        url: 'http://www.sebrae.com.br/Sebrae/Portal%20Sebrae/UFs/AP/Imagens/tecnologia.png',
        titulo: 'Tecnologia'
      }
    }
  },

};
</script>

<style>
</style>
