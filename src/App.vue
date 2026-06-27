<script setup lang="ts">

import { useAuthStore } from './stores/authStore'


const auth = useAuthStore()


</script>


<template>

<nav class="nav">


<div class="links">


<router-link to="/">
Tasks
</router-link>


<router-link to="/dashboard">
Dashboard
</router-link>


</div>


<div 
v-if="auth.logado"
class="user"
>

{{ auth.usuario }}


<button @click="auth.logout">

Sair

</button>


</div>


</nav>


<router-view />


</template>

<style scoped>   
.nav{

display:flex;
justify-content:space-between;
align-items:center;
padding:16px 22px;
background:rgba(255,255,255,.7);
backdrop-filter:blur(20px);
border-radius:20px;
border:1px solid rgba(0,0,0,.05);
box-shadow:0 10px 30px rgba(0,0,0,.08);
margin-bottom:40px;
}

.links a{

margin-right:25px;
text-decoration:none;
color:#555;
font-weight:500;
}



.links a.router-link-active{
color:#000;

}

</style>