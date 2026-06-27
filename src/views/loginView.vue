<script setup lang="ts">


import { ref } from 'vue'

import { useAuthStore } from '../stores/authStore'

import { useRouter } from 'vue-router'



const auth = useAuthStore()

const router = useRouter()

const nome = ref('')


function entrar(){

auth.login(nome.value)
router.push('/')


}


</script>



<template>


<h1>Login</h1>



<input v-model="nome"placeholder="Seu nome"/>


<button @click="entrar">Entrar</button>


</template>