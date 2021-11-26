<template>
  <div>
    <NavBarVistaAdmin></NavBarVistaAdmin>
  </div>
  <router-view></router-view>
</template>

<script>
import NavBarVistaAdmin from "../../components/NavBarVistaAdmin";
export default {
  name: "VistaAdmin",
  components: {NavBarVistaAdmin}
}
</script>

<style scoped>

</style>
