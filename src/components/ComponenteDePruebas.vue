<template>
  <div>
    <h1 id="jajasaludos">Jaja Saludos XDXDXDXd</h1>
  </div>

  <ul v-for="(c, index) in personas" :key="c.nombre">
        <li> {{index}}. Nombre: {{c.nombre}}, Edad: {{c.edad}}</li>
  </ul>

  <CardPersona v-for="c in personas" :key="c.nombre" v-bind:nombre="c.nombre" v-bind:edad="c.edad"></CardPersona>

</template>

<script>
import CardPersona from "./CardPersona";
export default {
  name: "ComponenteDePruebas",
  components: {CardPersona},
  data()
  {
    return {
      personas : [{nombre: "juan", edad: 10}, {nombre: "pepe", edad: 15}]
    }
  }
}
</script>

<style scoped>
  #jajasaludos {
    color: red;
  }
</style>
