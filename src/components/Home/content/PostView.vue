<template>
 <div class="all">
  <div v-if="loading" class="columns is-mobile is-centered">
        <div class="column is-narrow spinner" >
          <div class="spinner">
            <circle3 background="#3273dc" size="60px"></circle3>
          </div>
          
        </div>
      </div>
  <div v-else  class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <router-link :to="{ name: 'Posts', params: {page: pageNumber} }" class="has-text-weight-semibold" :class="colorPostLink(post.category)">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            Atras
          </router-link>
          <p class="is-right has-text-right" style="margin: 0;padding: 0;"><span class="is-size-8 is-italic">Relacionado con: </span><strong class="has-text-weight-semibold" :class="colorPostLink(post.category)">{{post.category}}</strong></p>
          <p class="is-right has-text-right" style="margin: 0;padding: 0;"><span class="is-size-8 is-italic">Dirigido a: </span><strong class="has-text-weight-semibold" :class="colorPostLink(post.category)">{{ subcategoryParse (post.subcategory)}}</strong></p>
          <p class="is-right has-text-right"><span class="is-size-8 is-italic">Autor: </span><strong class="has-text-weight-semibold" :class="colorPostLink(post.category)"> {{post.author}}</strong><br><strong class="is-size-8 is-italic">{{postDate(post.created)}}</strong></p>
          <h4 class="has-text-centered">
            <strong :class="colorPostLink(post.category)">{{post.title}}</strong>
          </h4>
          <p><span v-html="post.body" class="has-text-justified"></span></p>
          <p class="is-pulled-right">
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
      </div>
    </article>
  </div>
</div>
</template>

<script>

import sharer from '../../../mixins/sharers'
import { Circle3 } from 'vue-loading-spinner'
import moment from 'moment'
import { postsRef } from '../../../config'

export default {
  name: 'PostView',
  data () {
    return {
     pageNumber: 0,
     post: {},
     loading: true
    }
  },
  mounted () {

    this.$firebaseRefs.posts.orderByKey().equalTo(this.$route.params.key).limitToFirst(1).once('value').then(function (snapshot) {
      let shotemp = snapshot.val()

      let key = Object.keys(shotemp)
      shotemp[key[0]]['.key'] = this.$route.params.key
      this.post = shotemp[key[0]]
      this.loading=false
    }.bind(this))

    if(!this.$route.params.page){
      this.pageNumber = 0
    }else{
      this.pageNumber = this.$route.params.page
    }
  },
  firebase: {
    posts: postsRef
  },
  components: {
    Circle3
  },
  methods: {
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
      return temp.substring(0, 200) + '...'
    }
  },
  mixins: [sharer]
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
.spinner {
    margin-top: 4rem;
    height: 100vh;
  }
</style>
