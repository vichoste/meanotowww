<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login></Login>
  </div>
</template>

<script>

// @ is an alias to /s

import Login from "../components/Login";
export default {
  name: 'home',
  components: {
    Login,
  }
}
</script>
