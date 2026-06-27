<script setup lang="ts">

import { useTaskStore } from '../stores/taskStore'

import { computed } from 'vue'


const taskStore = useTaskStore()



const pendentes = computed(()=>{


return taskStore.tarefas.filter(

t => !t.concluida

).length


})


</script>


<template>


<h1>Dashboard</h1>


<p>
Total:
{{ taskStore.tarefas.length }}
</p>


<p>
Concluídas:
{{ taskStore.tarefasConcluidas.length }}
</p>


<p>
Pendentes:
{{ pendentes }}
</p>


</template>