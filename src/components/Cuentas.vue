<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <span class="fs-5 d-none d-sm-inline">Menu</span>
          <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li class="nav-item">
              <button class="nav-link active align-middle px-0" @click="mostrar('Prueba2')">
                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Prueba2</span>
              </button>
            </li>
            <li>
              <button class="nav-link active align-middle px-0" @click="mostrar('Prueba3')">
                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Prueba3</span>
              </button>
            </li>
            <li>
              <button class="nav-link active align-middle px-0" @click="mostrar('nada')">
                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">borrar</span>
              </button>
            </li>
            <li>
              <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
              <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                <li class="w-100">
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
              <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                <li class="w-100">
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
            </li>
          </ul>
          <hr>
          <div class="dropdown pb-4">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
              <span class="d-none d-sm-inline mx-1">loser</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col py-3">
          <prueba2 v-if="mostrarP2"></prueba2>
          <prueba3 v-if="mostrarP3"></prueba3>
      </div>
    </div>
  </div>
</template>

<script>
import Prueba2 from "./Prueba2";
import Prueba3 from "./Prueba3";
export default {
  components: {
    Prueba3,
    Prueba2
  },
  name: "Cuentas",
  data() {
    return {
      mostrarP2:true,
      mostrarP3:false
    }
  },
  methods:{
    mostrar(valor){
      switch (valor){
        case 'Prueba2' :
          this.mostrarP2 = true;
          this.mostrarP3 = false;
          break;
        case 'Prueba3' :
          this.mostrarP2 = false;
          this.mostrarP3 = true;
          break;
        default:
          this.mostrarP2 = false;
          this.mostrarP3 = false;
      }
    }
  }
}
</script>

<style scoped>

</style>
