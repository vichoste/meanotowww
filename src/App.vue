<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <FormularioP></FormularioP>
  <ComponenteDePruebas></ComponenteDePruebas>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComponenteDePruebas from "./components/ComponenteDePruebas";
import FormularioP from "./components/FormularioP";

export default {
  name: 'App',
  components: {
    FormularioP,
    HelloWorld,
    ComponenteDePruebas,

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
