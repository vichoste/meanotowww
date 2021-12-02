<template>
  <nav-bar-exemplo></nav-bar-exemplo>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
main {
  background: radial-gradient(
      circle,
      rgba(33, 37, 41, 0.8) 50%,
      rgba(33, 37, 41, 0.75) 100%
    ),
    url("./assets/background1.jpg") !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-size: cover !important;
  position: fixed;
  margin: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: auto !important;
}
.card {
  color: white;
  align-items: stretch;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.25);
  border-width: 0.125rem;
  margin: 2rem auto;
  background: radial-gradient(
    circle,
    rgba(33, 37, 41, 0.8) 50%,
    rgba(33, 37, 41, 0.75) 100%
  );
}
.card a {
  color: slategrey;
}
</style>
<script>
import NavBarExemplo from "./components/NavBarExemplo";
export default {
  components: { NavBarExemplo },
};
</script>
