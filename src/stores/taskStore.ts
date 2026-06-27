import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


interface Tarefa {

  id: number

  titulo: string

  concluida: boolean

}



export const useTaskStore = defineStore('tasks', () => {


  const tarefas = ref<Tarefa[]>(

    JSON.parse(

      localStorage.getItem('tarefas') || '[]'

    )

  )



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


    tarefas.value.push({

      id: Date.now(),

      titulo,

      concluida: false

    })


    salvar()

  }



  function concluirTarefa(id: number) {


    const tarefa = tarefas.value.find(

      t => t.id === id

    )


    if (tarefa) {

      tarefa.concluida = !tarefa.concluida

    }


    salvar()

  }



  function excluirTarefa(id: number) {


    tarefas.value = tarefas.value.filter(

      t => t.id !== id

    )


    salvar()

  }




  function salvar() {


    localStorage.setItem(

      'tarefas',

      JSON.stringify(tarefas.value)

    )


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