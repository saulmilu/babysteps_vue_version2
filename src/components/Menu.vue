<template>
    <div>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            >
            <v-list  >
                <!-- <v-list-item-group v-model="group"  active-class="deep-purple--text text--accent-4" >
                    <v-list-item v-for="item in menus" v-bind:key="item.title">
                        <router-link :to="item.link">
                            <v-list-item-icon>
                                <v-icon>mdi-{{item.mdi}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                        </router-link>
                    </v-list-item>
                </v-list-item-group> -->
               
                    <v-list-group :value="true" v-for="menu in menus" v-bind:key="menu.title" no-action >
                        <template v-slot:activator>
                            <v-list-item-title>{{menu.title}}</v-list-item-title>
                        </template>
                        <v-list-item v-for="item in menu.subgroup" v-bind:key="item.title" :to="item.link" active-class="deep-purple--text text--accent-4" >
                            <!-- <router-link :to="item.link"> -->
                                <v-list-item-icon>
                                    <v-icon>mdi-{{item.mdi}}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>{{item.title}}</v-list-item-title>
                            <!-- </router-link> -->
                        </v-list-item>
                    </v-list-group>
                

                
            </v-list>
        </v-navigation-drawer>
        <!-- <router-link to="/home">home</router-link>
        <router-link to="/geral">geral</router-link>
        <router-view></router-view> -->
        
    </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      nada: [],
      drawer: false,
      menus: this.itensMenu,
      title: this.titlemenu,
      group: null,
    //   title : 'Teste 2',
    //   menus :[
    //     {
    //       title: 'Home',
    //       mdi : 'home',
    //       link: '/home'
    //     },
    //     {
    //       title: 'Geral',
    //       mdi: 'hanger',
    //       link: '/geral'
    //     }
    //   ]

    };
  },
  created() { console.log(this.itensMenu);},
  props: ["itensMenu", "titlemenu"],
};
</script>

<style>
</style>