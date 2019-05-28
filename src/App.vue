<!-- // Este é um SFT (Single File Template) que é um arquivo vue que define 3 partes: template, script e style -->


<template>
  <div class="corpo">
    <!-- usando interpolação para acesso dos dados, neste caso o titulo -->
    <div class="titulo">
      <h1>{{ titulo }}</h1>
    </div>
    <div>
      <input type="search" class="filtro" v-on:input="filtro=$event.target.value" placeholder="Insira sua pesquisa pelo título">
      {{filtro}}
    </div>
    <!-- usando v-bind para acesso direto a um objeto dentro dos dados -->
    <div>
      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto of fotos" :key="foto.id">
          <meu-painel :titulo="foto.titulo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
          </meu-painel>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Painel from "./components/shared/painel/Painel";

export default {
  // registrando os componentes que serão usados
  components: {
    "meu-painel": Painel
  },

  data() {
    return {
      titulo: "App Power",
      fotos: [],
      filtro: ''
    };
  },

  created() {
    // usando método o vue-resource para dar um get via http
    this.$http
      .get("http://localhost:3000/v1/fotos")
      // como retorna uma promise, busco resposta, que é um json
      .then(res => res.json())
      // como ainda retorna uma promise, busco as fotos, imprimindo no log caso der erro
      .then(fotos => (this.fotos = fotos), err => console.log(err));
  }
};
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.titulo {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.imagem-responsiva {
  width: 100%;
}

.filtro {
    display: block;
    width: 100%;
}
</style>
