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

    <div class="task">

<input type="checkbox" :checked="tarefa.concluida" @change="marcarConcluida"/>

        <span :class="{ feito: tarefa.concluida }">

            {{ tarefa.titulo }}

        </span>


        <button @click="excluir">
            Excluir
        </button>
    </div>

</template>

<style scoped>

.task{

display:flex;
justify-content:space-between;
align-items:center;
padding:18px;
background:rgba(255,255,255,.8);
backdrop-filter:blur(15px);
border-radius:18px;
margin-bottom:15px;
border:1px solid rgba(0,0,0,.06);
transition:.2s;
}



.task:hover{
transform:translateY(-3px);
box-shadow:0 15px 30px rgba(0,0,0,.1);

}


.feito{

text-decoration:line-through;
opacity:.4;
}
</style>