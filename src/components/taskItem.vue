<script setup>

const props = defineProps({
  tarefa: Object
})


const emit = defineEmits([
  'concluir'
])


function marcarConcluida(){

  emit('concluir', props.tarefa.id)

}

</script>


<template>

<div>

  <input 
    type="checkbox"
    @click="marcarConcluida"
  >

  <span>
    {{ tarefa.titulo }}
  </span>

</div>

</template>