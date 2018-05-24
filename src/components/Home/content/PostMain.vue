<template>
  <div class="columns">
    <div class="column">
      <div v-for="(post, index) in pages[pageNumber]" :key="index" class="card card-right ">
        <header class="card-header">
          <p class="card-header-title" :class="colorPost (post.category)">
            {{post.title}}
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
                <a class="button is-small is-link is-outlined" style="border: none;">
                  <span class="icon fa-lg">
                    <i class="fa fa-telegram fa-lg" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="button is-small is-success is-outlined" style="border: none;">
                  <span class="icon fa-lg">
                    <i class="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="button is-small is-link is-outlined" style="border: none;" href="javascript: void(0);"
                   data-layout="button"
                   onclick="window.open('https://www.facebook.com/sharer.php?u=https://forza.cf/post/view/-L9XPZjtIRXcHfjvRLvD&title=title&description=MyDescription');">
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
                  Publicado por: <strong class="has-text-weight-semibold has-text-link">{{post.author}}</strong>
                </li>
                <li class=" is-size-7">
                  Relacionado: <strong class="has-text-weight-semibold has-text-link">{{post.category}}</strong>
                </li>
                <li class=" is-size-7">
                  Conglomerado: <strong class="has-text-weight-semibold has-text-link">{{subcategoryParse(post.subcategory)}}</strong>
                </li>
              </ul>
            </div>
            <div class="column is-one-quarter">
              <div class="buttons has-addons is-right" style="margin-right: 5%;">
                <router-link :to="'post/view/' + post['.key']" class=" button is-link" :class="colorPost (post.category)"><span class="icon"><i
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
</template>

<script>
import moment from 'moment'
import {postsRef} from '../../../config'
import editorReadMode from './editor-read'

export default {
  name: 'PostMain',
  data () {
    return {
      editorReadMode,
      pageNumber: 0,
      count: '',
      keys: [],
      pages: [],
      promises: [],
      size: 7,
      extraRecord: [],
      newPages: []
    }
  },
  firebase: {
    posts: postsRef
  },
  methods: {
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
        default:
      }
    },
    postDate (epoch) {
      if (!epoch) return // if no time return nothing
      return moment(epoch).format('MM/DD/YY - hh:mm')
    },
    cutString (string) {
      let temp = string.replace(/<(?:.|\n)*?>/gm, '')
      return temp.substring(0, 370) + '...'
    },
    nextPage () {
      this.pageNumber++
    },
    prevPage () {
      this.pageNumber--
    },
    cursorPag (acumulador, cursor) {
      this.pages = acumulador || []
      if (this.$route.path === '/') {
        var query = postsRef.orderByKey().limitToLast(this.size + 1)
      } else if (this.$route.path === '/sistemas/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('sist-regulares').limitToLast(this.size + 1)
      } else if (this.$route.path === '/sistemas/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('sist-cinu').limitToLast(this.size + 1)
      } else if (this.$route.path === '/sistemas/egresados') {
        var query = postsRef.orderByChild('subcategory').equalTo('sist-egresados').limitToLast(this.size + 1)
      } else if (this.$route.path === '/sistemas/docentes') {
        var query = postsRef.orderByChild('subcategory').equalTo('sist-docentes').limitToLast(this.size + 1)
      } else if (this.$route.path === '/electrica/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('elec-regulares').limitToLast(this.size + 1)
      } else if (this.$route.path === '/electrica/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('elec-cinu').limitToLast(this.size + 1)
      } else if (this.$route.path === '/electrica/docentes') {
        var query = postsRef.orderByChild('subcategory').equalTo('elec-docentes').limitToLast(this.size + 1)
      } else if (this.$route.path === '/enfermeria/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('enfer-regulares').limitToLast(this.size + 1)
      } else if (this.$route.path === '/enfermeria/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('enfer-cinu').limitToLast(this.size + 1)
      } else if (this.$route.path === '/agronomia/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('agro-regulares').limitToLast(this.size + 1)
      } else if (this.$route.path === '/agronomia/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('agro-cinu').limitToLast(this.size + 1)
      } else if (this.$route.path === '/administracion/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('admin-regulares').limitToLast(this.size + 1)
      } else if (this.$route.path === '/administracion/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('admin-cinu').limitToLast(this.size + 1)
      } else if (this.$route.path === '/economia/regulares') {
        var query = postsRef.orderByChild('subcategory').equalTo('econ-regulares').limitToLast(this.size + 1)
      } else if (this.$route.path === '/economia/cinu') {
        var query = postsRef.orderByChild('subcategory').equalTo('econ-cinu').limitToLast(this.size + 1)
      } else if (this.$route.path === '/servicio-comunitario') {
        var query = postsRef.orderByChild('subcategory').equalTo('ser-con').limitToLast(this.size + 1)
      } else if (this.$route.path === '/pasantias') {
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
          return Promise.resolve(this.pages)
        }
      }.bind(this))
    }

  },
  computed: {
    pageCount () {
      let l = this.pages[this.pageNumber]
      let s = this.size
      return Math.floor(l / s)
    },
    paginatedData () {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.listData.slice(start, end)
    }
  },
  mounted: function () {
    this.cursorPag()
  }
}
</script>

<style scoped>

  .enfermeria {
    background-color: rgba(0, 166, 28, 0.81);
  }
  .sistemas {
    background-color: #3273dc;
  }
  .general {
    background-color: rgba(0, 135, 165, 0.81);
  }
  .electrica {
    background-color: rgba(165, 0, 38, 0.81);
  }
  .economia {
    background-color: rgba(165, 91, 0, 0.81);
  }
  .administracion {
    background-color: rgba(101, 0, 164, 0.81);
  }
  .servicio {
    background-color: rgba(175, 59, 57, 0.8);
  }
  .pasantia {
    background-color: rgba(0, 175, 145, 0.8);
  }
  .agronomia {
    background-color: rgba(134, 185, 0, 0.81);
  }

</style>
