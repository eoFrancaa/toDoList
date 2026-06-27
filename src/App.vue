<script setup lang="ts">

import { useAuthStore } from './stores/authStore'


const auth = useAuthStore()


</script>


<template>

<nav>
    
<router-link to="/">Tarefas</router-link>|
<router-link to="/dashboard">Dashboard</router-link>

<p v-if="auth.logado">

Olá {{ auth.usuario }}

<button @click="auth.logout">Sair</button>
</p>


</nav>



<router-view />


</template>