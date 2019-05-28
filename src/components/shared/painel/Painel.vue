<template>
<div class="painel">
    <h2 class="painel-titulo">{{ titulo }}</h2>
    <!-- slot define que nesta tag será recebida o conteúdo do componente -->
    <slot class="painel-conteudo">
    </slot>
</div>
</template>

<script>
export default {
    //definindo as propriedades que serão passados para este componente
    props: ['titulo']
};
</script>

<style scoped>
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

* {
    box-shadow: 5px 5px 5px black;
}
</style>
