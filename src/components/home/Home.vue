<template>
  <div>
    <!-- usando interpolação para acesso dos dados, neste caso o titulo -->
    <div class="titulo">
      <h1>{{ titulo }}</h1>
    </div>
    <div>
      <input type="search" class="filtro" v-on:input="filtro=$event.target.value" placeholder="Insira sua pesquisa pelo título">
    </div>
    <!-- usando v-bind para acesso direto a um objeto dentro dos dados -->
    <div>
      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.id">
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
          </meu-painel>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Painel from "../components/shared/painel/Painel";
import ImagemResponsiva from "../components/shared/imagem-responsiva/ImagemResponsiva";

export default {
  // registrando os componentes que serão usados
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva
  },

  data() {
    return {
      titulo: "App Power",
      fotos: [],
      filtro: ''
    };
  },

  // funções de propriedades cacheadas, que são atualizadas conforme suas dependências, toda vez q fotos for atualizada, a propriedade que a usa será atualizada também
  computed: {
      fotosComFiltro() {

          if(this.filtro){

              //definindo uma expressão regular para o filtro, marcando como ignore case
              let exp = new RegExp(this.filtro.trim(), 'i');
              //retornando uma lista, conforme filtrada pelo seu título, que neste caso tem q dar mach com o título de cada foto
              return this.fotos.filter(foto => exp.test(foto.titulo));
          }
            return this.fotos;
      }
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

.titulo {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
    display: block;
    width: 100%;
}
</style>
