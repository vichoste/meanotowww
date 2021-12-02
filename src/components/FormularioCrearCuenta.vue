<template>
  <div class="container-fluid" >
    <form class="col-sm-9" >
      <div class="mb-3">
        <label>Tipo de usuario</label>
        <select v-model="tipoCuenta" class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="Administrador">Administrador</option>
          <option value="Profesor">Profesor</option>
          <option value="Encargado">Encargado</option>
          <option value="Asistente">Asistente</option>
        </select>
      </div>
      <div  v-if="tipoCuenta != 'Administrador'" class="mb-3">
        <select v-model="institucion" class="form-select" aria-label="Default select example">
          <option value=1>Utalca</option>
          <option value=2>Uchile</option>
          <option value=3>Uai</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="rut" class="form-label">RUT </label>
        <input v-model="run" type="text" class="form-control" id="rut">
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
import axios from 'axios'

export default {
  name: "FormularioCrearCuenta",
  data(){
    return {
      run:" ",
      nombres:" ",
      apellidos:" ",
      email:" ",
      contrasena:" ",
      tipoCuenta:" ",
      institucion:0
    }
  },
  methods:{
    validarDatos(){
      const nuevaCuenta =
          {
            email: this.email,
            contraseña: this.contrasena,
            run: this.run,
            nombre: this.nombres,
            apellido: this.apellidos
          }
      let url;
      switch (this.tipoCuenta)
      {
        case 'Administrador':
          url='http://localhost:34592/api/autenticación/login'
          this.crearCuenta(url,nuevaCuenta)
          break;
        case 'Profesor':
          url='http://localhost:34592/api/autenticación/registrar/profesor/'+this.institucion
          this.crearCuenta(url,nuevaCuenta)
          break;
        case 'Encargado':
          url='http://localhost:34592/api/autenticación/registrar/profesor/'+this.institucion
          this.crearCuenta(url,nuevaCuenta)
          break;
        case 'Asistente':
          url='http://localhost:34592/api/autenticación/registrar/profesor/'+this.institucion
          this.crearCuenta(url,nuevaCuenta)
          break;
        default:
          console.log('error de cosas')
          break
      }
    },
    crearCuenta(url,userr){

      axios.post(url,userr).then(response => {
        console.log(response.data)
        const cosas = response.data
        console.log(cosas)
      }).catch( error => {
        console.log(error)
      })
    },
  }
}

</script>

<style scoped>

</style>
