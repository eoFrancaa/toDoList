<script setup>

import TaskItem from './taskItem.vue'


defineProps({
    tarefas: Array
})


const emit = defineEmits([
    'concluir',
    'excluir'
])


function concluir(id) {

    emit('concluir', id)

}
function excluir(id) {

    emit('excluir', id)

}
</script>


<template>

    <TaskItem v-for="tarefa in tarefas" :key="tarefa.id" :tarefa="tarefa" @concluir="concluir" @excluir="excluir" />

</template>