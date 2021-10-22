<template>
  <div>
    <h1>{{nombre}}</h1>
    <h2>{{edad}}</h2>
    <p>
      -------------*-------------
      -------------*-------------
    </p>
  </div>
</template>

<script>
export default {
  name: "CardPersona",
  props:{
    nombre:String,
    edad:Number
  }
}
</script>

<style scoped>

</style>
