<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br/>
    <a>{{miProp}}</a>
    <br/>
    <p>{{doble}}</p>

    <!--con la linea de abajos e puede llmar una funcion al cliquear un componente del html, pos se mamo esto XDXDX-->
    <p v-on:click="miClick">{{numero}}</p>
    <button @click="numero++">+1</button>
    <button @click="numero--">-1</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    miClick: function () {
      return this.numero = 100
    }
  },
  data() {
    return {
      miProp: ":D",
      numero: 0
    }
  },
  computed: {
    doble: function () {
      return this.numero * 5
    }
  },
  watch: {
    numero: function (newNumero, oldNumero)
    {
      console.log("newNumero: "+newNumero+" oldNumero:"+oldNumero)

     // alert("cambio el valor de "+oldNumero+" a "+newNumero)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
