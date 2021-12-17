
<template>
  <div class="row">
    <div id="welcome" class="col-12 col-lg-7">
      <div class="card">
        <div class="row">
          <div class="col-12 col-sm-5 text-center">
            <img id="utal" class="m-5" src="../assets/utal.png" />
          </div>
          <div class="col-12 col-sm-7 card-body">
            <h2 class="card-title">¡Me Anoto!</h2>
            <h5 class="card-text">
              Gestione sus visitas a la universidad mediante la programación e
              inscripción de eventos.
            </h5>
          </div>
        </div>
      </div>
    </div>
    <div id="vertical" class="col-lg-1">
      <div class="vl"></div>
    </div>
    <div id="login" class="col-12 col-lg-4 text-center">
      <div class="card">
        <form class="card-body">
          <h5 class="card-title mb-3">Inicio de sesión</h5>
          <input
            class="form-control mb-3"
            type="text"
            placeholder="Correo electrónico"
            v-model="usuario"
          />
          <input
            class="form-control mb-3"
            type="password"
            name="password"
            placeholder="Contraseña"
            v-model="contrasena"
          />
          <input
            class="btn btn-primary mb-3"
            type="button"
            value="Entrar"
            @click="logearse()"
          />
          <!-- <a href="#">¿Olvidaste tu contraseña?</a> -->
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 576px) {
  h2,
  h5 {
    text-align: center;
  }
}
@media only screen and (max-width: 992px) {
  #vertical {
    display: none !important;
  }
}
#vertical {
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
}
#utal {
  width: calc(10vw + 5vh);
}
#welcome {
  display: flex;
  align-items: stretch;
  color: white;
}
#welcome .card {
  background: transparent;
  border: none;
  box-shadow: none !important;
}
#login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row {
  display: flex;
  align-content: space-around;
  align-items: center;
}

.vl {
  border-left: 0.25rem solid rgba(255, 255, 255, 0.25);
  height: 20rem;
}
</style>


<script>
import axios from "axios";
import store from "../store";
export default {
  name: "Login",
  data() {
    return {
      contrasena: null,
      usuario: null,
    };
  },
  setup() {},
  methods: {
    logearse() {
      console.log(this.usuario);
      console.log(this.contrasena);
      console.log("estas logeado");
      const userr = {
        email: this.usuario,
        contraseña: this.contrasena,
      };
      axios
        .post("http://localhost:34592/api/login", userr)
        .then((response) => {
          console.log(response.data);
          const cosas = response.data;
          const user = {
            correo: this.usuario,
            estado: cosas.estado,
            token: cosas.token,
            expira: cosas.expira,
            roles: cosas.roles,
          };
          console.log("user");
          console.log(user);
          store.dispatch("actionSetUser", {
            user: user,
          });
          console.log(store.getters.getRol);
          localStorage.setItem("usuario", JSON.stringify(user));
          const rol = user.roles[0];
          console.log("admin:" + rol);
          switch (rol) {
            case "administrador":
              console.log("adminnnn");
              this.$router.push("vistaCuentas");
              break;
            case "profesor":
              console.log("profesor");
              this.$router.push("vistaEventoProfesor");
              break;
            default:
              console.log("no adminnnn");
              this.$router.push("/");
              break;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      // revisar https://codesandbox.io/s/use-vuecookies-with-vuerouter-4-bu5y2?file=/src/main.js:93-131
      // revisar https://www.npmjs.com/package/vue3-cookies

      // print user name
    },
  },
};
</script>
