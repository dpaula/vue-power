<template>
    <div>
        <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{rotulo}}</button>
    </div>
</template>

<script>

    export default {

       props: {
            tipo: { required: true, type: String },
            rotulo: { required: true, type: String },
            confirmacao: { type: Boolean, default: false },
            estilo: { type: String, default: 'padrao' }
       },

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
              
               if(this.estilo == 'salvar'){
                   return 'botao-salvar'
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
   
    .botao-salvar {
        background: blue;
        color: white;
    }
</style>