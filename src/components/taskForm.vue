<script setup>

import { ref } from 'vue'

const texto = ref('')

const emit = defineEmits(['adicionar'])

function adicionar(){

    emit('adicionar', texto.value)

    texto.value = ''

}

</script>


<template>

<input 
v-model="texto"
placeholder="Nova tarefa"
/>

<button @click="adicionar">Adicionar</button>

</template>