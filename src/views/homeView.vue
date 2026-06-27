<script setup lang="ts">

import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'

import { useTaskStore } from '../stores/taskStore'


const taskStore = useTaskStore()


</script>


<template>

<h1>Minhas tarefas</h1>


<TaskForm
@adicionar="taskStore.adicionarTarefa"
/>


<TaskList

:tarefas="taskStore.tarefas"

@concluir="taskStore.concluirTarefa"

@excluir="taskStore.excluirTarefa"

/>


</template>