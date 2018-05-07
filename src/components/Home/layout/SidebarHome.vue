<template>
  <aside class="column is-one-quarter">
    <nav class="panel">
      <aside class="menu">
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li><a>Servicio Comunitario</a></li>
          <li><a>Pasantías</a></li>
        </ul>
        <p class="menu-label">
          Carreras
        </p>
        <ul class="menu-list">
          <li>
            <a class="is-active">Ing. De Sistemas</a>
            <ul>
              <li><a>Pregrado</a></li>
              <li><a>Postgrado</a></li>
            </ul>
          </li>
          <li><a>Ing. Eléctrica</a></li>
          <li><a>Ing. Agronómica</a></li>
          <li><a>TSU. Enfermería</a></li>
          <li><a>Lic. Idk</a></li>
        </ul>
      </aside>
    </nav>
    <div class="card is-hidden-mobile">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </aside>
</template>
<!-- esto es lo que estaba funcionando 

    <aside class="column is-one-quarter">
    <nav class="panel">
      <p class="panel-heading" style="background-color: #3273dc;color: #fff;">
        Blogs carreras
      </p>
      <a class="panel-block is-active">
        Sistemas
      </a>
      <a class="panel-block">
        Economia
      </a>
      <a class="panel-block">
        Electrica
      </a>
      <a class="panel-block">
        Servicio comunitario
      </a>
      <a class="panel-block">
        Pasantias
      </a>
    </nav>
    <div class="card is-hidden-mobile">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </aside>

-->
<!-- esto es mi nueva prueba a implementar
<aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">
    Transactions
  </p>
  <ul class="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </ul>
</aside> -->
<script>
  export default {
    name: 'SidebarHome'
  }
</script>

<style scoped>

</style>
