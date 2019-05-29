//criando uma directive, com nome v-meu-transform

import Vue from 'vue'

//definindo um nome para a diretiva
Vue.directive('meu-transform', {

    //metodo principal da diretiva
    bind(el, binding, vnode) {
        
        rotacionar(el);

    }

});

/**
 * ? Método que rotaciona 90º ao dar duplo clique
 * 
 * @param {dom} el 
 */
function rotacionar(el) {
    let current = 0;
    el.addEventListener('dblclick', function () {
        current += 90;
        el.style.transform = `rotate(${current}deg)`;
    });
}

