<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navi.vue'
</script>

<template>
  <Navbar v-if="!$route.meta.hideNavbar"/>
  <RouterView />

</template>

<style>
body {
  background-image: url('https://cdn.discordapp.com/attachments/1050795031574892555/1090918829279940679/lofi-samurai-100922.jpg');
  height: 100%;
  width: 100%;
}
</style>

