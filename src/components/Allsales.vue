
<template>
  <v-app>
    <appbar></appbar>
    <v-main>
      <v-tabs>
        <v-tab>All Sales</v-tab>
        <v-tab>Invoices</v-tab>
        <v-tab>Customers</v-tab>
        <v-tab>Products and services</v-tab>
      </v-tabs>
    </v-main>
  </v-app>
</template>
<script>
import appbar from "../common/appbar.vue";
export default {
  components: {
    appbar,
  },
  name: "Allsales",
  data: () => ({}),
};
</script>


<style>
</style>