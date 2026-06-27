<script setup lang="ts">


import { useTaskStore } from '../stores/taskStore'


const taskStore = useTaskStore()


</script>


<template>

<h1>Dashboard</h1>


<div class="cards">


<div>

<h3>Total de tarefas</h3>

<p>{{ taskStore.tarefas.length }}</p>

</div>



<div>

<h3>Concluídas</h3>

<p>{{ taskStore.tarefasConcluidas.length }}</p>

</div>



<div>

<h3>Pendentes</h3>

<p>{{ taskStore.tarefasPendentes.length }}</p>

</div>


</div>


</template>

<style scoped>
.cards{

display:grid;
grid-template-columns:repeat(3,1fr);
gap:25px;

}


.cards div{


background:rgba(255,255,255,.7);
backdrop-filter:blur(20px);
border-radius:25px;
padding:30px;
text-align:center;
border:1px solid rgba(0,0,0,.05);
box-shadow:0 15px 40px rgba(0,0,0,.08);

}



.cards p{

font-size:42px;
margin:10px;
font-weight:700;
}
</style>