  <template>
    <div id="app">
      <section>
        <div class="container is-fluid" style="margin:0; padding: 0px;">
          <div class="notification" style="margin:0; padding: 0px;">
           <figure class="image">
             <img src="../assets/img/h1.png"/>
             <img src="../assets/img/header.png">
           </figure>
         </div>
       </div>
     </section>
     <section class="section">
      <div class="container">
        <div class="columns">
          <sidebar></sidebar>
          <div class="column">
            <navbar></navbar>
            <div class="wrapper">
              <router-view></router-view>
              <pagination></pagination> 
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-col">
      <div class="container">
        <div class="columns is-centered">
          <div class="columm">
            <div class="integrantes is-info">
              <ul id="navlist">
                <li><strong>Colaboradores:</strong></li>
                <li><a href="#">Alexander Rodríguez</a></li>
                <li><a href="#">Brandon Rojas</a></li>
                <li><a href="#">Erickson Diaz</a></li>
                <li><a href="#">Miguel Carvajal</a></li>
                <li><a href="#">Naudy Linárez</a></li>
                <li><a href="#">Korina Dávila</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<div class="modal"> <!--agregar manualmente el toggle by js-->
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column">
              &copy; Forza System - UNEFA Núcleo Lara
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style type="text/css">

</style>

<script>
  import NavbarHome from './Home/layout/NavbarHome'
  import SidebarHome from './Home/layout/SidebarHome'
  import PaginationHome from './Home/layout/PaginationHome'

  export default {
    name: 'home',
    components: {
      'navbar': NavbarHome,
      'sidebar': SidebarHome,
      'pagination': PaginationHome
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        let target = $el.dataset.target
        let $target = document.getElementById(target)
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})

</script>