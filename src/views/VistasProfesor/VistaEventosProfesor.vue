<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">Crear evento</h5>
      <formulario-nuevo-evento-profesor></formulario-nuevo-evento-profesor>
    </div>
  </div>
</template>

<script>
import FormularioNuevoEventoProfesor from "@/components/FormularioNuevoEventoProfesor";
export default {
  name: "VistaEventosProfesor",
  components: { FormularioNuevoEventoProfesor },
};
</script>

<style scoped>
</style>
