import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useAuthStore = defineStore('auth', () => {


const usuario = ref(

localStorage.getItem('usuario')

)



const logado = ref(

!!usuario.value

)



function login(nome:string){


usuario.value = nome


logado.value = true


localStorage.setItem(

'usuario',

nome

)


}



function logout(){


usuario.value = null


logado.value = false


localStorage.removeItem(

'usuario'

)


}



return {

usuario,

logado,

login,

logout

}


})