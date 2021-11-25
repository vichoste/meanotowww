<template>
  <header>
    <nav-bar-exemplo></nav-bar-exemplo>
  </header>
  <router-view />
</template>

<style>
</style>
<script>
import NavBarExemplo from "./components/NavBarExemplo";
export default {
  components: { NavBarExemplo },
};
</script>
