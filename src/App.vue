<script setup>

import { ref, computed, watch } from 'vue'

import TaskForm from './components/taskForm.vue'
import TaskList from './components/taskList.vue'


const tarefas = ref(

  JSON.parse(
    localStorage.getItem('tarefas') || '[]'
  )

)


function adicionarTarefa(nome) {

  tarefas.value.push({

    id: Date.now(),

    titulo: nome,

    concluida: false

  })

}

function concluirTarefa(id) {

  const tarefa = tarefas.value.find(
    tarefa => tarefa.id === id
  )


  tarefa.concluida = !tarefa.concluida

}

function excluirTarefa(id) {

  tarefas.value = tarefas.value.filter(
    tarefa => tarefa.id !== id
  )

}

const tarefasConcluidas = computed(() => {

  return tarefas.value.filter(
    tarefa => tarefa.concluida
  )

})



watch(
  tarefas,
  (novasTarefas) => {


    localStorage.setItem(

      'tarefas',

      JSON.stringify(novasTarefas)
    )      

  },

  {
    deep: true
  }
)


</script>


<template>


  <TaskForm @adicionar="adicionarTarefa" />


  <h2>Tarefas</h2>

  <TaskList :tarefas="tarefas" @concluir="concluirTarefa" @excluir="excluirTarefa" />


  <h2>Concluídas {{tarefasConcluidas.length}}</h2>


  <TaskList :tarefas="tarefasConcluidas" @concluir="concluirTarefa" @excluir="excluirTarefa" />


</template>