<template>
  <section>
    <v-app-bar flat color="#0051b8" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Thinkbig Software Solutions </v-toolbar-title>
      <v-spacer> </v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bell-ring</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon> mdi-eyedropper</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon> mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
        >
          <v-list-item v-for="(item, i) in items" :key="i" link :to="item.link">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { text: "Dashboard", icon: "mdi-clock" },
      { text: "Sales", icon: "mdi-account", link: "/Allsales" },
      { text: "Expenses", icon: "mdi-flag" },
    ],
    selectedItem: 1,
  }),
};
</script>
<style>
@media (min-width: 360px) and (max-width: 640px) {
  .subheading {
    display: none;
  }
}
</style>