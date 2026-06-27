<script setup>

const props = defineProps({
    tarefa: Object
})


const emit = defineEmits([
    'concluir',
    'excluir'
])


function marcarConcluida() {

    emit('concluir', props.tarefa.id)

}

function excluir() {

    emit('excluir', props.tarefa.id)

}
</script>


<template>

    <div>

        <input type="checkbox" @change="marcarConcluida" />


        <span :class="{ concluida: tarefa.concluida }">

            {{ tarefa.titulo }}

        </span>


        <button @click="excluir">
            Excluir
        </button>
    </div>

</template>

<style scoped>
.concluida {

    text-decoration: line-through;

    opacity: 0.5;

}
</style>