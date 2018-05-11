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
.bordown{border-bottom: 1px solid #dbdbdb;}
.card-right{margin:3% 0% 5%; webkit-box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important; box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important;}
.post-title{background: #3273dc !important;}
/*########## custom styles for cards and sidebar menu 06-05-2018*/
.card-header-title, .card-header-title h4 a{background: #606d82; color: #fff;}
.card-header-title h4 a:hover {background: transparent;}
.accordion>.menu>.menu-list>li>div{cursor: pointer;}
.item-menu {background: #606d82; padding: 0.5rem; color: white; -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1); box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);}
.item-menu a{color: white;}
.item-menu-inside{background: #363c42; padding: 0.5rem; color: white; -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1); box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);}
.item-menu-inside a {color: #fff;}
.menu-list li ul { border-left: none; margin: 0; padding-left: 0; }
.menu-label{background: #3273dc;}
.horizontal, .vertical { background: rgb(54, 60, 66);}
#navlist li {display: inline; list-style-type: none; padding-right: 20px; }
ul#navlist li a {color: #000; }
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