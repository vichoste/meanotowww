<template>
  <main>
    <div class="row m-5">
      <div id="welcome" class="col-12 col-lg-8">
        <div class="card">
          <div class="row">
            <div class="col-12 col-sm-4 text-center">
              <img id="utal" class="m-5" src="../assets/utal.png" />
            </div>
            <div class="col-12 col-sm-8 card-body">
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
      <div id="login" class="col-12 col-lg-3">
        <div class="card">
          <form class="card-body">
            <h5 class="card-title">Inicio de sesión</h5>
            <input type="text" placeholder="RUN" v-model="usuario" />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              v-model="contrasena"
            />
            <input type="button" value="Entrar" @click="logearse()" />
            <a class="underlineHover" href="#">¿Olvidaste tu contraseña?</a>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background: radial-gradient(
      circle,
      rgba(54, 80, 102, 0.7) 0%,
      rgba(54, 80, 102, 0.95) 100%
    ),
    url("../assets/background1.jpg") !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-size: cover !important;
  position: fixed;
  margin: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden !important;
}
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
.card,
.card-text {
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
}
.vl {
  border-left: 0.25rem solid white;
  height: 500px;
}
</style>

<script>
import axios from "axios";
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
        .post("http://localhost:34592/api/autenticación/login", userr)
        .then((response) => {
          console.log(response.data);
          const cosas = response.data;
          const user = {
            correo: this.usuario,
            estado: cosas.estado,
            token: cosas.token,
            expira: cosas.expira,
          };
          this.$cookies.set("user", user, "1h");
          this.$router.push("holaMundo");
        })
        .catch((error) => {
          console.log(error);
        });

      localStorage.setItem("correo", "ajajaja soy un correo");
      localStorage.setItem("estado", "ajajaja soy un estado");
      localStorage.setItem("token", "ajajaja soy un token");
      localStorage.setItem("expira", "ajajaja soy un expira");

      this.$router.push("holaMundo");
      // revisar https://codesandbox.io/s/use-vuecookies-with-vuerouter-4-bu5y2?file=/src/main.js:93-131
      // revisar https://www.npmjs.com/package/vue3-cookies

      // print user name
    },
  },
};
</script>
