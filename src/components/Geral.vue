<template>
    <div>

        <p>
            {{ posEspaco }}
        </p>
       <div v-for="item of items" v-bind:key="item.name">
           <img :src="item.src" alt="" srcset="">
           <p>{{item.description}}</p>
           <br>
       </div>
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
    created(){
        getCharacters().then(res => {
            var novosItems = []
            for ( var it of res){
                it.src = it.thumbnail.path + '/portrait_small.'+ it.thumbnail.extension;
                novosItems.push(it)

            }
            this.items = novosItems
        });
    },
    
}
</script>

<style>

</style>