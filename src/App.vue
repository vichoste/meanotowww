<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ComponenteDePruebas></ComponenteDePruebas>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComponenteDePruebas from "./components/ComponenteDePruebas";

export default {
  name: 'App',
  components: {
    HelloWorld,
    ComponenteDePruebas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
