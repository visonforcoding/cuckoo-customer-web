<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>Magpie</q-toolbar-title>

        <div>Magpie v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2">
      <Sidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Sidebar from "./components/Sidebar";
export default {
  name: "layout",
  data() {
    return {
      leftDrawerOpen: true
    };
  },
  components: {
    Sidebar
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      console.log("created...");
    }
  }
};
</script>
