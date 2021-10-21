<template>
  <div>
    <a> prueba1 del formulario</a>
    <br/>
    <div>
      <label id="Nombre">Nombre</label>
      <input type="text" v-model="nombre">
      <br/>
      <label id="Contrasena">Contraseña</label>
      <input type="password" v-model="contrasena">
      <br/>
      <label id="Edad">Edad</label>
      <input type="number" v-model="edad">
    </div>


  </div>
</template>

<script>
export default {
  name: "FormularioP",
  data(){
    return {
      nombre:" ",
      contrasena:"",
      edad:Number,
    }
  },
  watch: {
    nombre: function (newNumero, oldNumero)
    {
      console.log("newNumero: "+newNumero+" oldNumero:"+oldNumero)
    },
    contrasena: function (newNumero, oldNumero)
    {
      console.log("newNumero: "+newNumero+" oldNumero:"+oldNumero)
    },
    edad: function (newNumero, oldNumero)
    {
      console.log("newNumero: "+newNumero+" oldNumero:"+oldNumero)
    }
  }
}
</script>

<style scoped>

</style>
