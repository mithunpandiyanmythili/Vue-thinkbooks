<template>
<v-app-bar flat color="#0051b8" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title
        >Thinkbig Software Solutions
       
      </v-toolbar-title>
      <v-spacer> </v-spacer>
  
        <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

       <v-btn icon>
        <v-icon> <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn></v-icon>
      </v-btn>
    </v-app-bar>

  
</template>
<script>
import appbar from "../common/appbar.vue";
export default {
name: 'Home',
components:{
appbar,
},
};
</script>