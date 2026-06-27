<script setup lang="ts">
import { ref } from 'vue'
import TaskForm from './components/taskForm.vue'
import TaskList from './components/taskList.vue'

const tarefas = ref([
  {
    id: 1,
    titulo: "Estudar Vue",
    concluida: false
  }
])

function adicionarTarefa(nome){

    tarefas.value.push({

        id: Date.now(),
        titulo: nome,
        concluida:false

    })

}
function concluirTarefa(id){

 const tarefa = tarefas.value.find(
   tarefa => tarefa.id === id
 )

 tarefa.concluida = !tarefa.concluida

}

</script>

<template>

  <TaskForm @adicionar="adicionarTarefa" />

  <TaskList :tarefas="tarefas"
   @concluir="concluirTarefa"/>
</template>

<style scoped></style>
