<template>
    <!-- <div>

        <p>
            {{ posEspaco }}
        </p>
       <div v-for="item of items" v-bind:key="item.name">
           <img :src="item.src" alt="" srcset="">
           <p>{{item.description}}</p>
           <br>
       </div>
    </div> -->
    <v-container>
        <v-row v-for="(item, index) in items" :key="index">
            <v-col v-for="sub in item" :key="sub.name">
                <v-card  class="mx-auto"   max-width="400">
                    <v-img  class="white--text align-end" height="200px" :src="sub.src">
                        <v-card-title>{{sub.name}}</v-card-title>
                    </v-img>
                    <v-card-text>
                        <div>{{sub.description}}</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

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
            // var novosItems = []
            // var col = []
            var rows = []
            // rows.push(col)
            for(var a = 0; a < res.length; a+=2){
                res[a].src = res[a].thumbnail.path + '/landscape_medium.'+ res[a].thumbnail.extension;
                res[a+1].src = res[a+1].thumbnail.path + '/landscape_medium.'+ res[a+1].thumbnail.extension;
                rows.push( [ res[a], res[a+1] ] )
            }

            // for ( var it of res){
                // if(col.length == 2){
                //     rows.push(col)
                //     col = []
                // }
                // rows.push(it)
                // novosItems.push(it)
            // }
            // if(col.length == 1){
            //     rows.push(col)
            // }
            this.items = rows
        });
    },
    
}
</script>

<style>

</style>