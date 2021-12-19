<template>
  
  <v-app>
    <Menu v-bind:itensMenu="menuOpt" v-bind:titlemenu="title" />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "./components/Menu";

export default {
  name: "App",

  components: {
    Menu,
  },

  data() {
    return {
      title: "SGI",
      menuOpt: [
        {
          title: "Home",
          mdi: "home",
          subgroup:[
            {
              title: "sub1",
              mdi: "home",
              link:"/home"
            },{
              title: "sub2",
              mdi: "hanger",
              link:"/geral"
            },
          ],
          
        },
        {
          title: "Geral",
          mdi: "hanger",
          subgroup:[
            {
              title: "sub3",
              mdi: "home",
              link:"/alocacoes"
            },
          ],
        },
        // {
        //   title: "Alocacoes",
        //   mdi: "hanger",
        //   link: "/alocacoes",
        // },
      ],
    };
  },
};
</script>
