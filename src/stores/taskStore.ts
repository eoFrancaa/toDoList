import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './authStore'


interface Tarefa {

  id: number

  titulo: string

  concluida: boolean

}



export const useTaskStore = defineStore('tasks', () => {


  const auth = useAuthStore()


  const todasTarefas = ref(JSON.parse(localStorage.getItem('tarefas') || '{}'))


  const tarefas = computed(() => {


    if (!auth.usuario) {

      return []

    }


    return todasTarefas.value[auth.usuario] || []


  })



  const tarefasConcluidas = computed(() => {


    return tarefas.value.filter(

      t => t.concluida

    )


  })



  const tarefasPendentes = computed(() => {


    return tarefas.value.filter(

      t => !t.concluida

    )


  })



  function adicionarTarefa(titulo: string) {


    if (!auth.usuario) return

    if (!todasTarefas.value[auth.usuario]) {

      todasTarefas.value[auth.usuario] = []
    }

    todasTarefas.value[auth.usuario].push({
      id: Date.now(),
      titulo,
      concluida: false


    })



    salvar()


  }



  function concluirTarefa(id: number) {


    const tarefa = todasTarefas.value[auth.usuario]
      .find(
        t => t.id === id
      )


    if (tarefa) {

      tarefa.concluida = !tarefa.concluida

    }


    salvar()

  }



  function excluirTarefa(id: number) {


    todasTarefas.value[auth.usuario] =

      todasTarefas.value[auth.usuario].filter(

        t => t.id !== id

      )


    salvar()

  }




  function salvar() {

    localStorage.setItem('tarefas', JSON.stringify(todasTarefas.value))

  }



  return {


    tarefas,

    tarefasConcluidas,

    tarefasPendentes,

    adicionarTarefa,

    concluirTarefa,

    excluirTarefa


  }


})