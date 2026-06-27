<script setup>

import { computed } from 'vue'


const tarefas = JSON.parse(

    localStorage.getItem('tarefas') || '[]'

)


const total = computed(() => {

    return tarefas.length

})


const concluidas = computed(() => {

    return tarefas.filter(
        t => t.concluida
    ).length

})


</script>


<template>


    <h1>Dashboard</h1>


    <p>
        Total de tarefas: {{ total }}
    </p>


    <p>
        Concluídas: {{ concluidas }}
    </p>


    <p>
        Pendentes:
        {{ total - concluidas }}
    </p>


</template>