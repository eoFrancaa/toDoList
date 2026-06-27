<script setup>

import TaskItem from './TaskItem.vue'


defineProps({
 tarefas:Array
})


const emit = defineEmits([
 'concluir'
])


function concluir(id){

 emit('concluir', id)

}
</script>


<template>

<div>

<TaskItem
 v-for="tarefa in tarefas"
 :key="tarefa.id"
 :tarefa="tarefa"
 @concluir="concluir"
/>

</div>

</template>