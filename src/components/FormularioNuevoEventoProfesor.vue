<template>
  <div class="container-fluid">
    <form class="col-sm-9">
      <div class="mb-3">
        <label for="nombreEvento" class="form-label">Nombre del evento</label>
        <input type="text" class="form-control" id="nombreEvento">
        <!--div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div -->
      </div>
      <div class="mb-3 form-check">
        <input v-model="repetir" type="checkbox" class="form-check-input" id="repetirCheck1">
        <label class="form-check-label" for="repetirCheck1">repetir evento</label>
      </div>
      <div v-if="repetir">
        <label class="form-label">Periodo de repeticion</label>
        <select v-model="periodo"  class="form-select" multiple aria-label="multiple select example">
          <option value="1">semanal</option>
          <option value="2">mensual</option>
          <option value="3">semestral</option>
        </select>
        <br/>
        <label for="fechaInicio" class="form-label">Nombre del evento</label>
        <input v-model="fechaInicio" type="date" class="form-control" id="fechaInicio">
        <br/>
        <label for="fechaFin" class="form-label">Nombre del evento</label>
        <input v-model="fechaFin" type="date" class="form-control" id="fechaFin">
      </div>
      <button type="button" class="btn btn-primary">crear</button>
    </form>

  </div>
</template>

<script>
export default {
  name: "FormularioNuevoEventoProfesor",
  data()
  {
    return {
      nombreEvento:String,
      fechaInicio:String,
      fechaFin:String,
      idEncargado:Number,
      repetir:false,
      periodo:Number
    }
  }
}
</script>

<style scoped>

</style>
