<script setup>

import { ref } from 'vue'

const texto = ref('')

const emit = defineEmits(['adicionar'])

function adicionar() {

    emit('adicionar', texto.value)

    texto.value = ''

}

</script>


<template>

    <input v-model="texto" placeholder="Nova tarefa" />

    <button @click="adicionar">Adicionar</button>

</template>

<style scoped>
input{
background:rgba(255,255,255,.8);
border:1px solid #ddd;
padding:15px 20px;
border-radius:14px;
font-size:16px;
outline:none;
}


input:focus{

border-color:#007aff;
box-shadow:0 0 0 4px rgba(0,122,255,.15);
}
</style>