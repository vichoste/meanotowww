<template>
  <nav-bar-exemplo></nav-bar-exemplo>
  <main>
    <router-view></router-view>
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
  position: fixed;
  margin: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: auto !important;
}
.card {
  color: white;
  align-items: stretch;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.25);
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
  align-items: stretch;
  align-content: space-around;
}
.btn-primary,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited {
  background-color: rgb(0, 122, 204);
  border: none;
}
.btn-primary:hover {
  background-color: rgb(0, 200, 255);
  border: none;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  border-color: rgba(255, 255, 255, 0.25);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-color: rgba(255, 255, 255, 0.25);
  appearance: none;
}
</style>
<script>
import NavBarExemplo from "./components/NavBarExemplo";
export default {
  components: { NavBarExemplo },
};
</script>
