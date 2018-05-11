
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
            <li class="item-menu"><a href="http://dasypc.jimdo.com/servicio-comunitario" target="_blank"><i class="fa fa-globe" aria-hidden="true"></i> Servicio Comunitario</a></li>
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
                <li class="item-menu-inside"><a>Estudiantes regulares</a></li>
                <li class="item-menu-inside"><a>CINU</a></li>
                <li class="item-menu-inside"><a>Docentes</a></li>
                <li class="item-menu-inside"><a>Egresados</a></li>
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
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@unefalara</a>.
      <a href="#">#expoferia</a> <a href="#">#tecnologia</a>
      <br>
      <time datetime="2016-1-1">10:00 AM - 14 May 2018</time>
    </div>
  </div>
</div>
</aside> 
</template>

<script>
  import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'

  export default {
    name: 'cool-component, SidebarHome',
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
