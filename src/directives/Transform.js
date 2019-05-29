//criando uma directive, com nome v-meu-transform

import Vue from 'vue'

//definindo um nome para a diretiva
Vue.directive('meu-transform', {

    //metodo principal da diretiva
    bind(el, binding, vnode) {

        //modificadores passadas para a diretiva
        //animate, reverse

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
        let incremento = binding.value || 90;

        //verifica se foi passado o modificador reverse (v-meu-transform.reverse)
        if (binding.modifiers.reverse) {
            current -= incremento;
        } else {
            current += incremento;
        }

        // rotaciona em graus
        el.style.transform = `rotate(${current}deg)`;

        //verifica se foi passado o modificador animate (v-meu-transform.animate)
        if (binding.modifiers.animate) {
            // a trasição da rotação leva meio segundo
            el.style.transition = 'transform 0.5s'
        }

    });

}


