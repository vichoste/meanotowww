<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Me Anoto</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <NavBarVistaAdmin v-if="getRol==='administrador'"></NavBarVistaAdmin>
          <li class="nav-item">
            <router-link class="nav-link active" to="/nosotros">Nosotros</router-link>
          </li>
        </ul>
        <buton v-on:click="cerrarSecion" type="button" class="btn btn-primary">cerrar secion</buton>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "../router";
import NavBarVistaAdmin from "./NavBarVistaAdmin";

export default {
  name: "NavBarExemplo",
  components: {NavBarVistaAdmin},
  computed:
      {
        getRol: function ()
        {
          let user = JSON.parse(localStorage.getItem('usuario'))
          console.log(user)
          if(user  !== null)
          {
            switch (user.roles[0])
            {
              case 'administrador':
                return 'administrador'

              default:
                return 'null'

            }
          }
          return 'null'
        }
      },
  methods: {
    cerrarSecion()
    {
      localStorage.clear()
      console.log('ajjaaj saludos')
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
