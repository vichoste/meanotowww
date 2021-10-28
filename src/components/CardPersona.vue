<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{nombre}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{edad}}</h6>
    </div>
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
