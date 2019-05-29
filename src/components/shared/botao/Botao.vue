<template>
    <div>
        <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{rotulo}}</button>
    </div>
</template>

<script>
    export default {
       props: [ 'tipo', 'rotulo', 'confirmacao', 'estilo'],

       methods: {
           disparaAcao() {
               if(this.confirmacao){
                   // apresenta uma mensagem de confirmação, caso a resposta for ok, entra no if
                   if(confirm('Confirma operação?')) {
                       // emite um novo evento @botaoAtivado, que o componente pai tem acesso
                       this.$emit('botaoAtivado');
                   }
               }
           }
       },

       computed: {
           estiloDoBotao() {

               if(this.estilo == 'perigo'){
                   return 'botao-perigo'
               }

               return 'botao-padrao'
           }
       },
    }
</script>

<style scoped>

 .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>