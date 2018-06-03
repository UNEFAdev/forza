<template>
    <div class="columns is-mobile is-centered">
      
      <div v-if="!loading && !pages[0].length > 0" class="column is-half is-narrow">
        <div class="columns is-mobile is-centered spinner">
        <a @click="cursorPag(null, null, '/') "class="has-text-weight-semibold has-text-link">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          <router-link :to="'/'">Atras &nbsp</router-link>
          
        </a>
        <br>
         <h1>No hay resultados que mostrar</h1>
          
        </div>
      </div>

      <div v-else-if="loading" class="column is-half is-narrow">
        <div class="columns is-mobile is-centered spinner">
          <div class="spinner column is-one-fifth is-narrow">
            <circle3 background="#3273dc" size="60px"></circle3>
          </div>
          
        </div>
      </div>

 
    <div v-else class="columns">
        <aside class="column is-one-quarter">
          <nav class="panel card-right">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title menu-label">
                  General
                </p>
              </header>
              <div class="card-content">
                <ul class="menu-list">
                  <li class="item-menu" @click="cursorPag(null, null,'/')">
                    <router-link :to="'/'"><i class="fa fa-home" aria-hidden="true"></i> Inicio</router-link>
                  </li>
                  <li class="item-menu" @click="cursorPag(null, null,'/servicio-comunitario')">
                    <router-link :to="'/servicio-comunitario'"><i class="fa fa-globe" aria-hidden="true"></i> Servicio Comunitario</router-link>
                  </li>
                  <li class="item-menu" @click="cursorPag(null, null,'/pasantias')">
                    <router-link :to="'/pasantias'"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Pasantías</router-link>
                  </li>
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
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/sistemas/regulares')">
                        <router-link :to="'/sistemas/regulares'">Estudiantes Regulares</router-link>
                      </li>
                      <li class="item-menu-inside" @click="cursorPag(null, null, '/sistemas/cinu')">
                        <router-link :to="'/sistemas/cinu'">CINU</router-link>
                      </li>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/sistemas/docentes')">
                        <router-link :to="'/sistemas/docentes'">Docentes</router-link>
                      </li>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/sistemas/egresados')">
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
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/electrica/regulares')">
                        <router-link :to="'/electrica/regulares'">Estudiantes regulares</router-link>
                      </li>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/electrica/cinu')">
                        <router-link :to="'/electrica/cinu'">CINU</router-link>
                      </li>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/electrica/docentes')">
                        <router-link :to="'/electrica/docentes'">Docentes</router-link>
                      </li>
                    </ul>
                  </p>
                </BulmaAccordionItem>
              </li>
              <li>
                <BulmaAccordionItem>
                  <h4 slot="title"><i class="fa fa-pagelines" aria-hidden="true"></i> Ing. Agronómica</h4>
                  <p slot="content">
                    <ul>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/agronomia/regulares')">
                        <router-link :to="'/agronomia/regulares'">Estudiantes regulares</router-link>
                      </li>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/agronomia/cinu')">
                        <router-link :to="'/agronomia/cinu'">CINU</router-link>
                      </li>
                    </ul>
                  </p>
                </BulmaAccordionItem>
              </li>
              <li>
                <BulmaAccordionItem>
                  <h4 slot="title"><i class="fa fa-stethoscope" aria-hidden="true"></i> TSU. Enfermería</h4>
                  <p slot="content">
                    <ul>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/enfermeria/regulares')">
                        <router-link :to="'/enfermeria/regulares'">Estudiantes regulares</router-link>
                      </li>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/enfermeria/cinu')">
                        <router-link :to="'/enfermeria/cinu'">CINU</router-link>
                      </li>
                    </ul>
                  </p>
                </BulmaAccordionItem>
              </li>
              <li>
                <BulmaAccordionItem>
                  <h4 slot="title"><i class="fa fa-archive" aria-hidden="true"></i> Lic. Administración y gestión municipal</h4>
                  <p slot="content">
                    <ul>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/administracion/regulares')">
                        <router-link :to="'/administracion/regulares'">Estudiantes regulares</router-link>
                      </li>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/administracion/cinu')">
                        <router-link :to="'/administracion/cinu'">CINU</router-link>
                      </li>
                    </ul>
                  </p>
                </BulmaAccordionItem>
              </li>
              <li>
                <BulmaAccordionItem>
                  <h4 slot="title"><i class="fa fa-university" aria-hidden="true"></i> Lic. Economía Social</h4>
                  <p slot="content">
                    <ul>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/economia/regulares')">
                        <router-link :to="'/economia/regulares'">Estudiantes regulares</router-link>
                      </li>
                      <li class="item-menu-inside" @click="cursorPag(null, null,'/economia/cinu')">
                        <router-link :to="'/economia/cinu'">CINU</router-link>
                      </li>
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
      
      
      
      <div class="column">
      
      <div v-for="(post, index) in pages[pageNumber]" :key="index" class="card card-right ">
        <header class="card-header">
          <p class="card-header-title" :class="colorPost (post.category)">
            <router-link class="linkpost" :to=" { name: 'PostView', params: { page: pageNumber, key: post['.key'] } }">
                {{post.title}}
            </router-link>
          </p>          
        </header>
        <div class="card-content ">
          <div class="content has-text-justified ">
            {{cutString(post.body)}}
          </div>
        </div>
        <footer class="">
          <div class="columns">
            <div class="column is-one-fifth">
              <p class="buttons is-centered">
                <i class="fa fa-share" aria-hidden="true"></i>&nbsp;&nbsp;
                <a class="button is-small is-link is-outlined" 
                    style="border: none;"
                    @click="shareTelegram(post['.key'], post.title)">
                  <span class="icon fa-lg">
                    <i class="fa fa-telegram fa-lg" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="button is-small is-success is-outlined" style="border: none;"
                @click="shareWhatsapp(post['.key'])">
                  <span class="icon fa-lg">
                    <i class="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="button is-small is-link is-outlined" style="border: none;" href="javascript: void(0);"
                   data-layout="button"
                   @click="shareFacebook(post['.key'], post.title, cutString(post.body))">
                  <span class="icon fa-lg">
                    <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
                  </span>
                </a>
              </p>
            </div>
            <div class="column">
              <ul class="is-flex metad">
                <li class=" is-size-7">
                  <time datetime="2018-1-1"><strong>{{postDate(post.created)}}</strong></time>
                </li>
                <li class=" is-size-7">
                  Publicado por: <strong class="has-text-weight-semibold" :class="colorPostLink (post.category)">{{post.author}}</strong>
                </li>
                <li class=" is-size-7">
                  Relacionado con: <strong class="has-text-weight-semibold" :class="colorPostLink (post.category)">{{post.category}}</strong>
                </li>
                <li class=" is-size-7">
                  Dirigido a: <strong class="has-text-weight-semibold" :class="colorPostLink (post.category)" >{{subcategoryParse(post.subcategory)}}</strong>
                </li>
              </ul>
            </div>
            <div class="column is-one-quarter">
              <div class="buttons has-addons is-right" style="margin-right: 5%;">
                <router-link :to=" { name: 'PostView', params: { page: pageNumber, key: post['.key'] } }" class=" button see-more" :class="colorPost (post.category)"><span class="icon"><i
                  class="fa fa-plus" aria-hidden="true"></i></i></span>&nbsp; Ver mas
                </router-link>
              </div>
            </div>

          </div>
        </footer>
      </div>
      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <button class="pagination-previous button is-link is-outlined" :disabled="pageNumber == 0" @click="prevPage">
          Anterior
        </button>
        <button class="pagination-next button is-link is-outlined" @click="nextPage"
                :disabled="pageNumber == pages.length -1">Siguiente
        </button>
      </nav>
    </div>
  </div>
  </div>
</template>

<script>
import moment from 'moment'
import {postsRef} from '../../../config'
import editorReadMode from './editor-read'
import sharer from '../../../mixins/sharers'
import poster from '../../../mixins/poster'
import { Circle3 } from 'vue-loading-spinner'
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'

export default {
  name: 'PostMain',
  data () {
    return {
      editorReadMode,
      pageNumber: 0,
      count: '',
      pages: [],
      size: 7,
      promises: [],
      extraRecord: [],
      keys: [],
      loading: true,
      currentPath: this.$route.path
    }
  },
  components: {
    Circle3,
    BulmaAccordion,
    BulmaAccordionItem
  },
  methods: {
    cursorPag (acumulador, cursor, path) {
      this.currentPath = path
      this.loading=true
      this.pages = acumulador || []
      if (path === '/') {
        var query = postsRef.orderByKey().limitToLast(this.size + 1)
      } else if (path === '/sistemas/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('sist-regulares').limitToLast(this.size + 1)
      } else if (path === '/sistemas/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('sist-cinu').limitToLast(this.size + 1)
      } else if (path === '/sistemas/egresados') {
        var query = postsRef.orderByChild('subcategory').equalTo('sist-egresados').limitToLast(this.size + 1)
      } else if (path === '/sistemas/docentes') {
        var query = postsRef.orderByChild('subcategory').equalTo('sist-docentes').limitToLast(this.size + 1)
      } else if (path === '/electrica/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('elec-regulares').limitToLast(this.size + 1)
      } else if (path === '/electrica/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('elec-cinu').limitToLast(this.size + 1)
      } else if (path === '/electrica/docentes') {
        var query = postsRef.orderByChild('subcategory').equalTo('elec-docentes').limitToLast(this.size + 1)
      } else if (path === '/enfermeria/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('enfer-regulares').limitToLast(this.size + 1)
      } else if (path === '/enfermeria/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('enfer-cinu').limitToLast(this.size + 1)
      } else if (path === '/agronomia/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('agro-regulares').limitToLast(this.size + 1)
      } else if (path === '/agronomia/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('agro-cinu').limitToLast(this.size + 1)
      } else if (path === '/administracion/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('admin-regulares').limitToLast(this.size + 1)
      } else if (path === '/administracion/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('admin-cinu').limitToLast(this.size + 1)
      } else if (path === '/economia/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('econ-regulares').limitToLast(this.size + 1)
      } else if (path === '/economia/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('econ-cinu').limitToLast(this.size + 1)
      } else if (path === '/servicio-comunitario') {
        var query = postsRef.orderByChild('subcategory').equalTo('ser-con').limitToLast(this.size + 1)
      } else if (path === '/pasantias') {
        var query = postsRef.orderByChild('subcategory').equalTo('pas').limitToLast(this.size + 1)
      }

      if (cursor) {
        query = query.endAt(cursor)
      }

      return query.once('value').then(function (snaps) {
        var page = []
        snaps.forEach(function (childSnap) {
          var item = childSnap.val()
          item['.key'] = childSnap.key
          page.unshift(item)
        })
        if (page.length > this.size) {
          this.extraRecord = page.pop()
          this.pages.push(page)
          return this.cursorPag(this.pages, this.extraRecord['.key'])
        } else {
          this.pages.push(page)
          this.loading = false
          return Promise.resolve(this.pages)
        }
      }.bind(this))
    },
    
    colorPost (text) {
      switch (text) {
        case 'Sistemas':
          return 'sistemas'
        case 'Electrica':
          return 'electrica'
        case 'Servicio-Comunitario':
          return 'servicio'
        case 'Pasantias':
          return 'pasantia'
        case 'Economia':
          return 'economia'
        case 'Administracion':
          return 'administracion'
        case 'Enfermeria':
          return 'enfermeria'
        case 'Agronomia':
          return 'agronomia'
        case 'Todo':
          return 'general'
        default:
      }
    },
    colorPostLink (text) {
      switch (text) {
        case 'Sistemas':
          return 'sistemas-link'
        case 'Electrica':
          return 'electrica-link'
        case 'Servicio-Comunitario':
          return 'servicio-link'
        case 'Pasantias':
          return 'pasantia-link'
        case 'Economia':
          return 'economia-link'
        case 'Administracion':
          return 'administracion-link'
        case 'Enfermeria':
          return 'enfermeria-link'
        case 'Agronomia':
          return 'agronomia-link'
        case 'Todo':
          return 'general-link'
        default:
      }
    },
    subcategoryParse (text) {
      switch (text) {
        case 'sist-regulares':
          return 'Regulares'
        case 'sist-egresados':
          return 'Egresados'
        case 'sist-cinu':
          return 'CINU'
        case 'sist-docentes':
          return 'Docentes'
        case 'elec-regulares':
          return 'Regulares'
        case 'elec-cinu':
          return 'CINU'
        case 'elec-docentes':
          return 'Docentes'
        case 'enfer-regulares':
          return 'Regulares'
        case 'enfer-cinu':
          return 'CINU'
        case 'agro-regulares':
          return 'Regulares'
        case 'agro-cinu':
          return 'CINU'
        case 'admin-regulares':
          return 'Regulares'
        case 'admin-cinu':
          return 'CINU'
        case 'econ-regulares':
          return 'Regulares'
        case 'econ-cinu':
          return 'CINU'
        case 'ser-con':
          return 'General'
        case 'pas':
          return 'General'
        case 'todo':
          return 'General'
        default:
      }
    },
    postDate (epoch) {
      if (!epoch) return // if no time return nothing
      return moment(epoch).format('MM/DD/YY - hh:mm')
    },
    cutString (string) {
      let temp = string.replace(/<(?:.|\n)*?>/gm, '')
      let text = temp.replace(/&nbsp;/gi,'');
      return text.substring(0, 370) + '...'
    },
    nextPage () {
      this.pageNumber++
    
    },
    prevPage () {
      this.pageNumber--
      
    }
  
  },
  computed: {
 
  },
  mixins: [sharer],
  mounted: function () {
    this.cursorPag(null, null, this.$route.path)
    if(!this.$route.params.page){
      this.pageNumber = 0
    }else{
      this.pageNumber = this.$route.params.page
    }
  }
}

</script>

<style scoped>

  .enfermeria {
    background-color: #bab138;
  }
  .sistemas {
    background-color: #3273dc;
  }
  .general {
    background-color: #ba6138;
  }
  .electrica {
    background-color: #3aba41;
  }
  .economia {
    background-color: #ba3b4e;
  }
  .administracion {
    background-color: #ba3b4e;
  }
  .servicio {
    background-color: #3895ba;
  }
  .pasantia {
    background-color: #38baaa;
  }
  .agronomia {
    background-color: #ba3883;
  }
  .enfermeria-link {
    color: #bab138;
  }
  .sistemas-link {
    color: #3273dc;
  }
  .general-link {
    color: #ba6138;
  }
  .electrica-link {
    color: #3aba41;
  }
  .economia-link {
    color: #ba3b4e;
  }
  .administracion-link {
    color: #ba3b4e;
  }
  .servicio-link {
    color: #3895ba;
  }
  .pasantia-link {
    color: #38baaa;
  }
  .agronomia-link {
    color: #ba3883;
  }
  .see-more{
    color: white;
  }
  .see-more:hover{
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
  .spinner {
    margin-top: 4rem;
    height: 100vh;
  }
</style>
