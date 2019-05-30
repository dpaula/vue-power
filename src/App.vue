<!-- // Este é um SFT (Single File Template) que é um arquivo vue que define 3 partes: template, script e style -->

<template>
  <div class="corpo">

    <meu-menu :rotas="routes"/>
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from "./routes";

import Menu from "./components/shared/menu/Menu.vue"

export default {
  data() {
    return {
      //definindo um filtro das rotas para carregar a propriedade routes, somente as rotas que tiver menu = true
      routes : routes.filter(route => route.menu)
    };
  }, 

  components: {
      "meu-menu": Menu
  }
};
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}
</style>
