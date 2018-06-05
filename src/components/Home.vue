  <template>
    <div id="app">

            <section class="hero is-dark is-bold">
              <!-- Hero head: will stick at the top -->
              <div class="hero-head">
                <nav class="navbar">
                  <div class="container">
                    <div class="navbar-brand">
                      <a href="/" class="navbar-item is-size-1">
                        Forza System
                      </a>
                      <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHeroA" class="navbar-menu">
                      <div class="navbar-end">
                        <a class="navbar-item">
                          Novedades
                        </a>
                        
                        <router-link  class="navbar-item" :to="'/admin'">
                          Entrar
                        </router-link>
                        
                        <span class="navbar-item">
                          <a class="button is-primary is-inverted">
                            <span class="icon">
                              <i class="fab fa-github"></i>
                            </span>
                            <span>Github</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              <!-- Hero content: will be in the middle -->
              <div class="hero-body">
                <div class="columns is-hidden-touch">
                  <img src="../assets/img/logo_opt.png" class="center-10">
                </div>
                <div class="columns is-hidden-desktop">
                  <img src="../assets/img/logo_opt.png" class="center-50">
                </div>
                <h1 class="is-size-4 has-text-centered">UNEFA - LARA</h1>
              </div>
            </section>

            <section class="hero is-warning is-bold is-centered">
              <div class="hero-custom">
                <div class="container">
                  <h1 class="has-text-centered is-size-4 has-text-weight-bold is-size-6-mobile">
                    Universidad Nacional Experimental-Politécnica de la Fuerza Armada
                  </h1>
                </div>
              </div>
            </section>
            
        
     <section class="section bg">
      <div class="container">
        
          <!--<sidebar></sidebar>-->
            <!--<navbar></navbar>-->
            <div class="wrapper">
              <router-view></router-view>
            </div>
          
        
      </div>
    </section>

  
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

    <footer class="footer hero is-dark is-bold">
      <div class="container">
        <div class="columns is-centered">
          <div class="columm">
            <div class="integrantes is-info">
              <ul id="navlist">
                <li><strong>Créditos:</strong></li>
                <li><a href="https://github.com/AlexR1712" target="_blank">Alexander Rodríguez</a></li>
                <li><a href="https://github.com/brandondrl" target="_blank">Brandon Rojas</a></li>
                <li><a href="https://github.com/tatuco88" target="_blank">Erickson Diaz</a></li>
                <li><a href="javascript:void(0);">Miguel Carvajal</a></li>
                <li><a href="https://github.com/ViT4RGh0ST" target="_blank">Naudy Linárez</a></li>
                <li><a href="javascript:void(0);">Korina Dávila</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="columns has-text-centered">
          <div class="column">
              <div>&copy; Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional - {{(new Date()).getFullYear()}}</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style type="text/css">
  .title, .subtitle {
    margin-left: 150px;
  }
  .bg {
    background-color: hsl(0, 0%, 86%);
  }
  .hero-custom{
    padding: 10px;
  }
  .center-10 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 10%;
  }
  .center-50 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>

<script>
 
  import NavbarHome from './Home/layout/NavbarHome'
  import SidebarHome from './Home/layout/SidebarHome'
  import PaginationHome from './Home/layout/PaginationHome'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

  export default {
    name: 'home',
    components: {
      'navbar': NavbarHome,
      'sidebar': SidebarHome,
      'pagination': PaginationHome,
      FontAwesomeIcon

     
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