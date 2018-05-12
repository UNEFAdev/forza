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
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
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
    </section>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column">
              &copy; Forza System - UNEFA Núcleo Lara
          </div>
        <!--  <div class="column is-one-fifth">
            <p class="buttons is-centered">
              <a class="button is-small is-link is-inverted is-outlined" style="border: none;">
                <span class="icon fa-lg">
                  <i class="fa fa-telegram fa-lg" aria-hidden="true"></i>
                </span>
              </a>
              <a class="button is-small is-success is-inverted is-outlined" style="border: none;">
                <span class="icon fa-lg">
                  <i class="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
                </span>
              </a>
              <a class="button is-small is-link is-inverted is-outlined" style="border: none;">
                <span class="icon fa-lg">
                  <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
                </span>
              </a>
            </p>
          </div>-->
        </div>
      </div>
    </footer>
  </div>
</template>
<style type="text/css">
.bordown{border-bottom: 1px solid #dbdbdb;}
.card-right{margin:3% 0% 5%; webkit-box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important; box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important;}
/*########## custom styles 06-05-2018*/
.card-header-title {background: #3273dc; color: white;}
#navlist li {display: inline; list-style-type: none; padding-right: 20px; }
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