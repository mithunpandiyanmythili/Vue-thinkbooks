
<template>
  <v-app>
    <appbar></appbar>
    <v-main>
      <h1>Dashboard</h1>
    </v-main>
  </v-app>
</template>
<script>
import appbar from "../common/appbar.vue";
export default {
  components: {
    appbar,
  },
  name: "Dashboard",
  data: () => ({
    text: "adsdssdsad",
  }),
};
</script>