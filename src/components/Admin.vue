<template>
  <div class="admin bulma" id="admin">
    <!-- The admin page layout -->
    <navbar></navbar>
    <sidebar></sidebar>

    <!-- The admin page content -->
        <div class="wrapper">
      <section class="hero is-light is-medium is-bold" v-if="$route.name === 'Admin'">
        <div class="hero-body ">
          <div class="container has-text-centered">

            <div class="titleAdmin">
              <h1 class="title">
                Bienvenido al Sistema de Difusión de Información Forza 
              </h1>
            </div>
            <div class="has-text-centered">El sistema Forza es capaz de distribuir información a toda la población estudiantil de manera rápida concisa y veraz</div>
            <div class="has-text-centered"><strong>Agradecimientos:</strong> <i> Lic. Ángel Mora, MSc. Ing Luisa Colón, Ing. Gladys Adjunta</i></div>
            <figure><img src="static/img/logo.png" alt="" width="200" height="200"></figure>
            <div class="has-text-centered"><strong>Desarrolladores:</strong><ul id="navlistback"> <li><a href="https://github.com/AlexR1712" target="_blank">Alexander Rodríguez</a></li> <li><a href="https://github.com/brandondrl" target="_blank">Brandon Rojas</a></li> <li><a href="https://github.com/tatuco88" target="_blank">Erickson Diaz</a></li> <li><a href="javascript:void(0);">Miguel Carvajal</a></li> <li><a href="https://github.com/ViT4RGh0ST" target="_blank">Naudy Linárez</a></li> <li><a href="javascript:void(0);">Korina Dávila</a></li></ul></div>
          </div>
        </div>
      </section>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Navbar from './Admin/layout/Navbar'
import Sidebar from './Admin/layout/Sidebar'
import firebase from 'firebase'

export default {
  name: 'admin',
  components: {
    'navbar': Navbar,
    'sidebar': Sidebar
  },
  // prevent unauthenticated users from accessing the admin area
  // and direct them to the login page
  beforeRouteEnter (to, from, next) {
    // get the current logged in user
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // continue to /admin
        next()
      } else {
        // redirect to /login
        next('/login')
      }
    })
  }
}

</script>

<style lang="sass">

#admin
  font-family: 'Quicksand', sans-serif
  .wrapper
    width: calc(100% - 110px)
    position: absolute
    top: 52px
    left: 100px
    background-color: #F1F1F1

    .content-heading
      justify-content: baseline
      align-content: center
      align-items: center
      h3
        margin: 1em 1em 1em 0em

  .actions
    display: none
    span
      cursor: pointer

  tr:hover .actions
    display: inline
    span
      padding: 0px 0px 0px 10px

  .notification
    position: fixed
    top: 60px
    right: 10px
    z-index: 2000
    max-width: 90%

  .titleAdmin
    padding-bottom: 15px
</style>
