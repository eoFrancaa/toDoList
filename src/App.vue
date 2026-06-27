<script setup>
import { ref , computed } from 'vue'
import TaskForm from './components/taskForm.vue'
import TaskList from './components/taskList.vue'

const tarefas = ref([
  {
    id: 1,
    titulo: "Estudar Vue",
    concluida: false
  }
])

function adicionarTarefa(nome) {

  tarefas.value.push({

    id: Date.now(),
    titulo: nome,
    concluida: false

  })

}
function concluirTarefa(id) {

  const tarefa = tarefas.value.find(
    t => t.id === id
  )


  if (!tarefa) return

  tarefa.concluida = !tarefa.concluida

}
const tarefasConcluidas = computed(() => {

  return tarefas.value.filter(
    tarefa => tarefa.concluida
  )

})
</script>

<template>

  <TaskForm @adicionar="adicionarTarefa" />

  <TaskList :tarefas="tarefas" @concluir="concluirTarefa" />



  <h2>Tarefas Concluídas: {{ tarefasConcluidas.length }}</h2>


  <TaskList :tarefas="tarefasConcluidas" @concluir="concluirTarefa" />
</template>

<style scoped></style>
