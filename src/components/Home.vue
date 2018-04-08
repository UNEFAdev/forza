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
  </div>
</template>
<style type="text/css">
.bordown{border-bottom: 1px solid #dbdbdb;}
.card-right{margin:8% 0%; webkit-box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important; box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important;}
</style>

<script>
import NavbarHome from './Home/layout/NavbarHome'
import SidebarHome from './Home/layout/SidebarHome'

export default {
  name: 'home',
  components: {
    'navbar': NavbarHome,
    'sidebar': SidebarHome
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
