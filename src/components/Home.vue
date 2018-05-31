  <template>
    <div id="app">
      <section>
        <div class=" is-fluid" style="margin:0; padding: 0px;">
          
          <div class="columns">
            <div class="column">

              <section class="hero is-dark is-bold">
                <div class="hero-body">
                  <div class="container">
                    <article class="media">
                      <figure class="media-left">
                        <p class="image is-128x128">
                          <img src="../assets/img/logo.png">
                        </p>
                      </figure>
                      <div class="media-content">
                        <p></p>
                      </div>
                      
                    </article>
                    <h1 class="title">
                      Forza System
                    </h1>
                    <h2 class="subtitle">
                      UNEFA - LARA
                    </h2>
                    
                  </div>
                </div>
                
              </section>
              <section class="hero is-warning is-bold">
                <div class="hero-custom">
                  <div class="container">
                    <h2 class="title has-text-centered">
                      Universidad Nacional Experimental-Politécnica de la Fuerza Armada
                    </h2>
                  </div>
                </div>
              </section>
            
          </div>
          </div>
              
          
       </div>
     </section>
     <section class="section bg">
      <div class="container">
        <div class="columns">
          <sidebar></sidebar>
          <div class="column">
            <!--<navbar></navbar>-->
            <div class="wrapper">
              <router-view></router-view>
            </div>
          </div>
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
      'pagination': PaginationHome,
     
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