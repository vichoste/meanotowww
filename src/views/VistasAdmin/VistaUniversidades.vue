<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">Gestión de universidades</h5>
      <FormularioCrearInstitucion></FormularioCrearInstitucion>
    </div>
  </div>
</template>

<script>
import FormularioCrearInstitucion from "../../components/FormularioCrearInstitucion";
export default {
  name: "VistaUniversidades",
  components: { FormularioCrearInstitucion },
};
</script>

<style scoped>
</style>
