<script setup lang="ts">

import { useAuthStore } from './stores/authStore'


const auth = useAuthStore()


</script>


<template>


<div class="layout">


<aside class="sidebar">


<h2 class="logo">
✓ Tasks
</h2>



<nav>


<router-link to="/">

📝 Tarefas

</router-link>



<router-link to="/dashboard">

📊 Dashboard

</router-link>



</nav>



<div class="profile" v-if="auth.logado">


<div>

Olá,

<strong>
{{ auth.usuario }}
</strong>

</div>


<button @click="auth.logout">

Sair

</button>


</div>



</aside>




<main class="content">


<router-view />


</main>



</div>


</template>



<style scoped>


.layout{
display:flex;
min-height:100vh;
gap:25px;
}




.sidebar{
width:260px;
height:calc(100vh - 80px);
position:sticky;
top:40px;
background:rgba(255,255,255,.65);
backdrop-filter:blur(25px);
border-radius:25px;
padding:25px;
border:1px solid rgba(0,0,0,.06);
box-shadow:0 15px 40px rgba(0,0,0,.08);


}



.logo{
margin-bottom:35px;
font-size:22px;
}



nav{
display:flex;
flex-direction:column;
gap:10px;

}



nav a{
padding:12px 15px;
border-radius:12px;
text-decoration:none;
color:#555;
transition:.2s;


}



nav a:hover{
background:#f0f0f5;


}



nav a.router-link-active{
background:#007aff;
color:white;

}



.content{
flex:1;
padding:20px;


}

.profile{

position:absolute;
bottom:25px;
left:25px;
right:25px;
background:white;
padding:15px;
border-radius:15px;


}



button{
margin-top:10px;
width:100%;
background:#007aff;
color:white;
border:none;
padding:10px;
border-radius:20px;
cursor:pointer;

}



</style>