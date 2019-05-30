<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="gravar()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" v-model.lazy="foto.titulo" autocomplete="off">
      </div>

      <div class="controle">
        <label for="url">URL</label>  
        <!-- incluido modificador lazy para so alterar a propriedade quando sair do foco do input -->
        <input id="url" v-model.lazy="foto.url" autocomplete="off">
        <!-- neste caso com o v-show, a imagem só será carregada quando tiver valor da url -->
        <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" v-model="foto.descricao" autocomplete="off"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" estilo="salvar"/>
        <router-link to="/"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';

import Foto from '../../domain/foto/Foto';
import FotoService from '../../domain/foto/FotoService';

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  data() {
    return {
      foto: new Foto()
    }
  },

  methods: {

    gravar() {
      
      this.fotoService
        .cadastra(this.foto)
        .then(() => this.foto = new Foto(), err => console.log(err));

    }
  },

  created() {

    //criando uma propriedade dinamicamente
    this.fotoService = new FotoService(this.$resource);
  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>