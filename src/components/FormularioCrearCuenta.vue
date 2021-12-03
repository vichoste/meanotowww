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
          <option v-for="institucionn in this.listaInstituciones" :key="institucionn.nombre" v-bind:value="institucionn.id">{{institucionn.nombre}}</option>
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
      <button type="button" @click="validarDatos" class="btn btn-primary">crear</button>
      <button type="button" @click="getInstituciones" class="btn btn-primary">cargar</button>
    </form>

  </div>
</template>

<script>
import axios from 'axios'
import store from "../store";

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
      institucion:0,
      listaInstituciones:[],
      cargadas: false
    }
  },
  computed:{
    getToken:function ()
    {
      return store.getters.getToken
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
          url='http://localhost:34592/api/autenticación/registrar/administrador'
          break;
        case 'Profesor':
          url='http://localhost:34592/api/autenticación/registrar/profesor/'+this.institucion
          break;
        case 'Encargado':
          url='http://localhost:34592/api/autenticación/registrar/encargado/'+this.institucion
          break;
        case 'Asistente':
          url='http://localhost:34592/api/autenticación/registrar/asistente/'+this.institucion
          break;
        default:
          console.log('error de cosas')
            url='null'
          break
      }
      if(url!== 'null')
      {
        this.crearCuenta(url,nuevaCuenta)
      }
    },
    crearCuenta(url,userr){

      axios.post(url,userr, {
        headers:{
          'Authorization': `Bearer ${this.getToken}`
        }
      }).then(response => {
        console.log(response.data)
        const cosas = response.data
        console.log(cosas)
      }).catch( error => {
        console.log(error)
      })
    },
    getInstituciones(){
      let url ='http://localhost:34592/api/institución/listar'
      axios.get(url, {
        headers:{
          'Authorization': `Bearer ${this.getToken}`
        }
      }).then(response => {
        this.listaInstituciones = []
        let lista = response.data
        console.log(response.data)
        console.log(lista)
        for (let i = 0; i < lista.length; i++) {
          console.log(lista[i])
          let institucion = {
            id:lista[i].id,
            nombre:lista[i].nombre
          }
          console.log(institucion)
          this.listaInstituciones.push(institucion)
          this.cargadas= true
        }
      }).catch( error => {
        console.log("jajaj error")
        console.log(error)
      })
    }
  }
}

</script>

<style scoped>

</style>
