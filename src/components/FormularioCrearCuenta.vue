<template>
  <div class="container-fluid" >
    <form class="col-sm-9" >
      <div class="mb-3">
        <label for="rut" class="form-label">RUT </label>
        <input v-model="rut" type="text" class="form-control" id="rut">
      </div>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombres</label>
        <input v-model="nombres" type="text" class="form-control" id="nombre">
      </div>
      <div class="mb-3">
        <label for="apellidos" class="form-label">Apellidos</label>
        <input v-model="apellidos" type="text" class="form-control" id="apellidos">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo electronico</label>
        <input v-model="email" type="email" class="form-control" id="email">
      </div>
      <div class="mb-3">
        <label for="contrasena" class="form-label">Contraseña</label>
        <input v-model="contrasena" type="password" class="form-control" id="contrasena">
      </div>
      <button type="button" class="btn btn-primary">crear</button>
    </form>

  </div>
</template>

<script>
export default {
  name: "FormularioCrearCuenta",
  data(){
    return {
      rut:String,
      nombres:String,
      apellidos:String,
      email:String,
      contrasena:String

    }
  }
}
</script>

<style scoped>

</style>
