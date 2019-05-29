<!-- // Este é um SFT (Single File Template) que é um arquivo vue que define 3 partes: template, script e style -->

<template>
  <div class="corpo">
    <nav>
      <ul>
        <li v-for="route in routes" :key="route.id">
          <router-link :to="route.path ? route.path : '/'">{{ route.titulo}}</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from "./routes";

export default {
  data() {
    return {
      routes
    };
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
