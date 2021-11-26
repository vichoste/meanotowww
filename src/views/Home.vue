<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <formulario-p></formulario-p>
  </div>
</template>

<script>
// @ is an alias to /src

import FormularioP from "../components/FormularioP";
export default {
  name: 'Home',
  components: {
    FormularioP
  }
}
</script>
