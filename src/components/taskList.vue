<script setup>

defineProps({
 tarefas:Array
})

</script>


<template>

<div v-for="tarefa in tarefas">

{{ tarefa.titulo }}

</div>

</template>