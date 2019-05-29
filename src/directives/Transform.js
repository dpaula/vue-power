//criando uma directive, com nome v-meu-transform

import Vue from 'vue'

//definindo um nome para a diretiva
Vue.directive('meu-transform', {

    //metodo principal da diretiva
    bind(el, binding, vnode) {

        //propriedades passadas para a diretiva
        //v-meutransform="{ incremento: 20, animate: true }"

        rotacionar(el, binding);

    }

});

/**
 * ? Método que rotaciona 90º ao dar duplo clique
 * 
 * @param {dom} el 
 */
function rotacionar(el, binding) {


    let current = 0;

    el.addEventListener('dblclick', function () {

        // se retornar nada, atribui 90;
        let incremento = binding.value.incremento || 90;

        current += incremento;

        // rotaciona em graus
        el.style.transform = `rotate(${current}deg)`;

        if(binding.value.animate){
            // a trasição da rotação leva meio segundo
            el.style.transition = 'transform 0.5s'
        }

    });

}


