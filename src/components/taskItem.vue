<script setup>

const props = defineProps({
    tarefa: Object
})


const emit = defineEmits([
    'concluir'
])


function marcarConcluida() {

    emit('concluir', props.tarefa.id)

}

</script>


<template>

    <div>

        <input type="checkbox" @change="marcarConcluida" />


        <span :class="{ concluida: tarefa.concluida }">

            {{ tarefa.titulo }}

        </span>

    </div>

</template>

<style scoped>

.concluida{

text-decoration: line-through;

opacity:0.5;

}

</style>