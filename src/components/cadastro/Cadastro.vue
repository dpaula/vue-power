<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>

    <div>
      <!-- usando diretiva v-if, caso a condiçao seja true, inclui no dom, caso contrario como abaixo mostra outro -->
      <h2 v-if="foto._id" class="centralizado">Alterando</h2>
      <h2 v-else class="centralizado">Incluindo</h2>
    </div>

    <form @submit.prevent="gravar()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input data-vv-as="Título" name="titulo" v-validate data-vv-rules="required|min:3|max:30" id="titulo" v-model="foto.titulo" autocomplete="off">
        <span class="erro" v-show="errors.has('titulo')">{{errors.first('titulo')}}</span>
      </div>

      <div class="controle">
        <label for="url">URL</label>  
        <!-- incluido modificador lazy para so alterar a propriedade quando sair do foco do input -->
        <input data-vv-as="Url" name="url" v-validate data-vv-rules="required" id="url" v-model="foto.url" autocomplete="off">
        <span class="erro" v-show="errors.has('url')">{{errors.first('url')}}</span>
        <!-- neste caso com o v-show, a imagem só será carregada quando tiver valor da url -->
        <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" v-model="foto.descricao" autocomplete="off"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" estilo="salvar"/>
        <router-link :to="{ name: 'home' }"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
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
      foto: new Foto(),
      //busca o parametro definido na rota (/cadastro/:id')
      id: this.$route.params.id
    }
  },

  methods: {

    gravar() {

      // acessa o validador e verifica todas as validaçoes do componente
      this.$validator
        .validateAll()
        .then(sucessoNasValidacoes => {

          // se tiver sucesso, quer dizer q pode seguir em frente
          if(sucessoNasValidacoes){

            this.fotoService
              .cadastraOuAltera(this.foto)
              .then(() => {
      
                //se já tiver id, é pq se trata de uma alteração, então volta para pagina home
                if(this.id){
                  this.$router.push({name: 'home'});
                }
      
                this.foto = new Foto();
      
                }, err => console.log(err));

          }

        });
      

    }
  },

  created() {

    //criando uma propriedade dinamicamente
    this.fotoService = new FotoService(this.$resource);

    if(this.id){
      this.fotoService
        .busca(this.id)
        .then(foto => this.foto = foto, err => console.log('Erro', err));
    }
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

  .erro {
    color: red;
  }

</style>