<template>
    <div>

        <p>
            {{ posEspaco }}
        </p>
    </div>
</template>

<script>
import { getCharacters } from '../servicos/marvel.js'


export default {
    name : 'Geral',
    data(){
        return{
            posEspaco : "Olá Geral",
            items : null
        }
    },

}
</script>

<style>

</style>