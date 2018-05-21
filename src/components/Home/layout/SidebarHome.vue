
<template>
  <aside class="column is-one-quarter">
    <nav class="panel  card-right">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title menu-label">
            General
          </p>
        </header>
        <div class="card-content">
          <ul class="menu-list">
            <li class="item-menu"><a href="/"><i class="fa fa-home" aria-hidden="true"></i> Inicio</a></li>
            <li class="item-menu"><a><i class="fa fa-globe" aria-hidden="true"></i> Servicio Comunitario</a></li>
            <li class="item-menu"><a><i class="fa fa-graduation-cap" aria-hidden="true"></i> Pasantías</a></li>
          </ul>   
        </div>
        <p class="card-header-title menu-label">
          Carreras
        </p>
        <div class="card-content">
          <BulmaAccordion
          :dropdown="false"
          :icon="'plus-minus'"
          :caretAnimation="{
          duration: '.5s',
          timerFunc: 'ease-in-out',
        }"
        :slide="{
        duration: '.5s',
        timerFunc: 'ease',
      }"
      > 
      <div class="menu">
        <ul class="menu-list">
          <li><BulmaAccordionItem>
            <h4 slot="title"><i class="fa fa-laptop" aria-hidden="true"></i> Ing. De Sistemas</h4>
            <p slot="content">          
              <ul>
                <li class="item-menu-inside">
                  <router-link :to="'/sistemas/regulares'">Estudiantes Regulares</router-link>
                </li>
                <li class="item-menu-inside">
                  <router-link :to="'/sistemas/cinu'">CINU</router-link>
                </li>
                <li class="item-menu-inside">
                  <router-link :to="'/sistemas/docentes'">Docentes</router-link>
                </li>
                <li class="item-menu-inside">
                  <router-link :to="'/sistemas/egresados'">Egresados</router-link>
                </li>
              </ul>
            </p>
          </BulmaAccordionItem>
        </li>
        <li>
          <BulmaAccordionItem>
            <h4 slot="title"><i class="fa fa-bolt" aria-hidden="true"></i> Ing. Eléctrica</h4>
            <p slot="content">          
              <ul>
                <li class="item-menu-inside"><a>Estudiantes regulares</a></li>
                <li class="item-menu-inside"><a>CINU</a></li>
                <li class="item-menu-inside"><a>Docentes</a></li>
              </ul>
            </p>
          </BulmaAccordionItem>
        </li>
        <li>
          <BulmaAccordionItem>
            <h4 slot="title"><i class="fa fa-pagelines" aria-hidden="true"></i> Ing. Agronómica</h4>
            <p slot="content">          
              <ul>
                <li class="item-menu-inside"><a>Estudiantes regulares</a></li>
                <li class="item-menu-inside"><a>CINU</a></li>
              </ul>
            </p>
          </BulmaAccordionItem>
        </li>
        <li>
          <BulmaAccordionItem>
            <h4 slot="title"><i class="fa fa-stethoscope" aria-hidden="true"></i> TSU. Enfermería</h4>
            <p slot="content">          
              <ul>
                <li class="item-menu-inside"><a>Estudiantes regulares</a></li>
                <li class="item-menu-inside"><a>CINU</a></li>
              </ul>
            </p>
          </BulmaAccordionItem>
        </li>
        <li>
          <BulmaAccordionItem>
            <h4 slot="title"><i class="fa fa-archive" aria-hidden="true"></i> Lic. Administración y gestión municipal</h4>
            <p slot="content">          
              <ul>
                <li class="item-menu-inside"><a>Estudiantes regulares</a></li>
                <li class="item-menu-inside"><a>CINU</a></li>
              </ul>
            </p>
          </BulmaAccordionItem>
        </li>
        <li>
          <BulmaAccordionItem>
            <h4 slot="title"><i class="fa fa-university" aria-hidden="true"></i> Lic. Economía Social</h4>
            <p slot="content">          
              <ul>
                <li class="item-menu-inside"><a>Estudiantes regulares</a></li>
                <li class="item-menu-inside"><a>CINU</a></li>
              </ul>
            </p>
          </BulmaAccordionItem>
        </li>
      </ul>
    </div>
  </BulmaAccordion>
</div>
</div>
</nav>

<div class="card is-hidden-mobile">
  <div class="card-content">
    <div class="content">
      <a class="twitter-timeline" data-lang="es" data-width="400" data-height="400" href="https://twitter.com/DSUnefaLara?ref_src=twsrc%5Etfw">Tweets by DSUnefaLara</a> 
    </div>
  </div>
</div>
<div class="card is-hidden-mobile">
  <div class="card-content">
    <div class="content">
    <a class="twitter-timeline" data-lang="es" data-width="400" data-height="400" href="https://twitter.com/unefa_ve?ref_src=twsrc%5Etfw">Tweets by unefa_ve</a>
    </div>
  </div>
</div>
<div class="card is-hidden-mobile">
  <div class="card-content">
    <div class="content">
      <a href="https://instawidget.net/v/user/dsunefalara" id="link-2d1e792ded7abca16724aa4a1b78cd052c6f829918847e688f5609a5c764d310">@dsunefalara</a>
    </div>
  </div>
</div>
</aside> 
</template>

<script>
  import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'

  export default {
    name: 'SidebarHome',
    data() {
      return {}
    },
    components: {
      BulmaAccordion,
      BulmaAccordionItem
    }
  }

</script>

<style scoped>

</style>
