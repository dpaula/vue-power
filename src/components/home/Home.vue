<template>
  <div>
    <!-- usando interpolação para acesso dos dados, neste caso o titulo -->
    <div class="titulo">
      <h1>{{ titulo }}</h1>
      <div class="mensagem-aviso">
        <p v-show="mensagem" class="mensagem-aviso">{{mensagem}}</p>
      </div>
    </div>
    <div>
      <input
        type="search"
        class="filtro"
        v-on:input="filtro=$event.target.value"
        placeholder="Insira sua pesquisa pelo título"
      >
    </div>
    <!-- usando v-bind para acesso direto a um objeto dentro dos dados -->
    <div>
      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.id">
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva
              v-meu-transform.animate.reverse="20"
              :url="foto.url"
              :titulo="foto.titulo"
            />
            <!-- na passagem de parametros para as propriedades do componente, usa se ":" quando não quer passar apenas string -->
            <meu-botao
              tipo="button"
              rotulo="REMOVER"
              @botaoAtivado="remove(foto)"
              :confirmacao="true"
              estilo="perigo"
            />
          </meu-painel>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

export default {
  // registrando os componentes que serão usados
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },

  data() {
    return {
      titulo: "App Power",
      fotos: [],
      filtro: "",
      mensagem: ""
    };
  },

  methods: {
    remove(foto) {
      this.$http.delete(`http://localhost:3000/v1/fotos/${foto._id}`).then(
        () => {
          this.mensagem = "Foto removida com sucesso!!";

          // atualiza a lista de fotos, sem precisar revisitar o servidor
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
        },
        err => {
          console.log(err);
          this.mensagem = "Não foi possível remover a foto";
        }
      );
    }
  },

  // funções de propriedades cacheadas, que são atualizadas conforme suas dependências, toda vez q fotos for atualizada, a propriedade que a usa será atualizada também
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        //definindo uma expressão regular para o filtro, marcando como ignore case
        let exp = new RegExp(this.filtro.trim(), "i");
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

.mensagem-aviso {
  text-align: center;
  color: brown;
  font-weight: bold;
  background-color: wheat;
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
