<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-center">Crear cuenta</h5>
      <form>
        <div class="mb-3">
          <label class="mb-2">Tipo de usuario</label>
          <select
            v-model="tipoCuenta"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="Administrador">Admin</option>
            <option value="Profesor">Profesor</option>
            <option value="Encargado">Encargado</option>
            <option value="Encargado">Asistente</option>
          </select>
        </div>
        <div class="mb-3" v-if="tipoCuenta != 'Admin'">
          <label class="mb-2">Tipo de cuenta</label>
          <select class="form-select" aria-label="Default select example">
            <option value="Admin">utalca</option>
            <option value="profe">uchile</option>
            <option value="encargado">uai</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="rut" class="form-label">RUT</label>
          <input v-model="rut" type="text" class="form-control" id="rut" />
        </div>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombres</label>
          <input
            v-model="nombres"
            type="text"
            class="form-control"
            id="nombre"
          />
        </div>
        <div class="mb-3">
          <label for="apellidos" class="form-label">Apellidos</label>
          <input
            v-model="apellidos"
            type="text"
            class="form-control"
            id="apellidos"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electronico</label>
          <input v-model="email" type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="contrasena" class="form-label">Contraseña</label>
          <input
            v-model="contrasena"
            type="password"
            class="form-control"
            id="contrasena"
          />
        </div>
      </form>
    </div>
    <div class="button-center">
      <button type="button" class="btn btn-primary">Crear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioCrearCuenta",
  data() {
    return {
      rut: " ",
      nombres: " ",
      apellidos: " ",
      email: " ",
      contrasena: " ",
      tipoCuenta: " ",
    };
  },
};
</script>

<style scoped>
</style>
