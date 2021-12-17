<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">Crear cuenta</h5>
      <FormularioCrearCuenta></FormularioCrearCuenta>
      <hr />
      <tabla-usuarios tabla-usuarios></tabla-usuarios>
    </div>
  </div>
</template>

<script>
import FormularioCrearCuenta from "../../components/FormularioCrearCuenta";
import TablaUsuarios from "../../components/tablaUsuarios";
export default {
  name: "VistaCuetas",
  components: { FormularioCrearCuenta, TablaUsuarios },
};
</script>

<style scoped>
</style>
