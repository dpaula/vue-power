<!-- // Este é um SFT (Single File Template) que é um arquivo vue que define 3 partes: template, script e style -->


<template>
  <div class="corpo">
    <!-- usando interpolação para acesso dos dados, neste caso o titulo -->
    <div class="titulo">
      <h1>{{ titulo }}</h1>
    </div>
    <!-- usando v-bind para acesso direto a um objeto dentro dos dados -->
    <div>
      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto of fotos" :key="foto.id">
          
          <div class="painel">
            <h2 class="painel-titulo">{{ foto.titulo }}</h2>
            <div class="painel-conteudo">

                <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
            </div>
          </div>

        </li>
      </ul>
    </div>
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

/* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
</style>
