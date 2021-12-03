<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Me Anoto</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <NavBarVistaAdmin v-if="getRol === 'administrador'"></NavBarVistaAdmin>
          <li class="nav-item">
            <router-link class="nav-link active" to="/nosotros">Nosotros</router-link>
          </li>
        </ul>
        <buton v-if="getRol!== 'null'" v-on:click="cerrarSecion" type="button" class="btn btn-primary">cerrar sesion</buton>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "../router";
import NavBarVistaAdmin from "./NavBarVistaAdmin";
import store from "../store";

export default {
  name: "NavBarExemplo",
  components: {NavBarVistaAdmin},
  computed:
      {
        getCounter: function(){
          return store.getters.getRol
        },
        getRol:function ()
        {
          return store.getters.getRol
        }
      },
  methods: {
    cerrarSecion()
    {
      localStorage.clear()
      let user=
      {
        correo: "",
            estado: "",
          token: "",
          expira: "",
          roles: []
      }
      store.dispatch('actionSetUser', {
        user: user
      })
      console.log('ajjaaj saludos')
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
