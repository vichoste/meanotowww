<template>
  <FormularioCrearCuenta></FormularioCrearCuenta>
  <tabla-usuarios></tabla-usuarios>
</template>

<script>
import FormularioCrearCuenta from "../../components/FormularioCrearCuenta";
import TablaUsuarios from "../../components/tablaUsuarios";
export default {
  name: "VistaCuetas",
  components: { FormularioCrearCuenta,
                TablaUsuarios,
              },
};
</script>

<style scoped>
</style>
