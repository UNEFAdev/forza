<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand ">
      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" id="navMenu">
      <p class="navbar-item has-text-white">
        Ordenar por:
      </p>
      <a class="navbar-item has-text-white">
        <div class="field">
          <div class="control has-icons-left">
            <div class="select">
              <select>
                <option selected>Carrera:</option>
                <option>Ing. De Sistemas</option>
                <option>Ing. Eléctrica</option>
                <option>Ing. Agronómica</option>
                <option>TSU. Enfermería</option>
                <option>Lic. idk</option>
              </select>
            </div>
            <div class="icon is-small is-left">
              <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </a>
      <a class="navbar-item has-text-white">
        <div class="field">
          <div class="control has-icons-left">
            <div class="select">
              <select>
                <option selected>Fecha:</option>
                <option>Ultimas Publicaciones</option>
                <option>Publicaciones Antiguas</option>
              </select>
            </div>
            <div class="icon is-small is-left">
              <i class="fa fa-calendar" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </a>
      <a class="navbar-item has-text-white">
        <div class="field">
          <div class="control has-icons-left">
            <div class="select">
              <select>
                <option selected>Otros:</option>
                <option>Servicio Comunitario</option>
                <option>Pasantías</option>
              </select>
            </div>
            <div class="icon is-small is-left">
              <i class="fa fa-university" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavbarHome'
  }
</script>

<style scoped>
a.navbar-item:hover, a.navbar-item.is-active, a.navbar-link:hover, a.navbar-link.is-active {
    background-color: #0459e2;}
</style>
