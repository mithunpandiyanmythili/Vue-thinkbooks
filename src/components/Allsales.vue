
<template>
  <v-app>
    <appbar></appbar>
    <v-main>
      <v-container-fluid>
        <v-tabs v-model="tab">
          <v-tab key="k1" href="#k1" v-if="!hide">All Sales</v-tab>
          <v-tab key="k2" href="#k2">Invoices</v-tab>
          <v-tab key="k3" href="#k3">Customers</v-tab>
          <v-tab key="k4" href="#k4">Products and services</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item key="k1" value="k1">
            <v-card color="basil" flat>
              <v-card-text>ddfgdfg</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item key="k2" value="k2">
            <v-card color="basil" flat>
              <v-card-text>ddfgdfg</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item key="k3" value="k3">
            <v-card color="basil" flat>
              <v-card-text>
                <div class="Heading-1">Customers</div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item key="k4" value="k4">
            <v-card color="basil" flat>
              <v-card-text>ddfgdfg</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-container-fluid>
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
  data: () => ({
    tab: "k3",
    hide: false,
  }),
};
</script>


<style>
.Heading-1 {
  font-size: 20px;
}
</style>