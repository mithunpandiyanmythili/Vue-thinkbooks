
<template>
  <v-app>
    <appbar></appbar>
    <v-main>
      <h1>home</h1>
    </v-main>
  </v-app>
</template>
<script>
import appbar from "../common/appbar.vue";
export default {
  components: {
    appbar,
  },
  name: "Home",
  data: () => ({
    text: "adsdssdsad",
  }),
};
</script>