<script setup lang="ts">


import { useTaskStore } from '../stores/taskStore'


const taskStore = useTaskStore()


</script>


<template>

    <h1>Dashboard</h1>

    <div>
        <h3>Total de tarefas</h3>

        <p>
            {{ taskStore.tarefas.length }}
        </p>

        <h3>Concluídas</h3>

        <p>
            {{ taskStore.tarefasConcluidas.length }}
        </p>

        <h3>Pendentes</h3>

        <p>
            {{ taskStore.tarefasPendentes.length }}
        </p>
    </div>


</template>