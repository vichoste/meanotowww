<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <formulario-p></formulario-p>
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src

import FormularioP from "../components/FormularioP";
import Login from "../components/Login";
export default {
  name: 'Home',
  components: {
    Login,
    FormularioP
  }
}
</script>
