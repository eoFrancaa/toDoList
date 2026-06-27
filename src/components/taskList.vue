<script setup>

import TaskItem from './taskItem.vue'


defineProps({
    tarefas: Array
})


const emit = defineEmits([
    'concluir'
])


function concluir(id) {

    emit('concluir', id)

}

</script>


<template>

    <TaskItem v-for="tarefa in tarefas" :key="tarefa.id" :tarefa="tarefa" @concluir="concluir" />

</template>