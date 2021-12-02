<template>
  <nav-bar-exemplo></nav-bar-exemplo>
  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<style>
main {
  background: radial-gradient(
      circle,
      rgba(33, 37, 41, 0.8) 50%,
      rgba(33, 37, 41, 0.75) 100%
    ),
    url("./assets/background1.jpg") !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-size: cover !important;
  position: static;
  margin: 0 !important;
  width: 100% !important;
  height: 100vh !important;
  overflow: auto !important;
}
.card {
  color: white;
  align-items: stretch;
  border-style: none;
  border-radius: 0.75rem;
  border-width: 0.2rem;
  margin: 2rem auto;
  background: radial-gradient(
    circle,
    rgba(33, 37, 41, 0.8) 50%,
    rgba(33, 37, 41, 0.75) 100%
  );
}
.card a {
  color: slategrey;
}
form {
  display: flex;
  flex-direction: column;
}
.btn-primary,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited {
  background-color: rgb(0, 122, 204);
  border: none;
}
.btn-primary:hover {
  background-color: rgb(0, 122, 230);
  border: none;
}
.form-control,
.form-select {
  color: white !important;
  background-color: rgba(0, 0, 0, 0.5) !important;
  box-shadow: none !important;
  border: none !important;
  border-radius: 0.75rem;
  border-color: rgba(255, 255, 255, 0.25);
}
.button-center {
  margin-bottom: 2rem;
  text-align: center;
}
.button-center .btn {
  width: 10rem;
}
</style>
<script>
import NavBarExemplo from "./components/NavBarExemplo";
export default {
  components: { NavBarExemplo },
};
</script>
