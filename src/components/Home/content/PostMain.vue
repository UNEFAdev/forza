<template>
  <div class="columns">
    <div class="column">
      <div v-for="(post, index) in posts" :key="index" class="card card-right ">
        <header class="card-header">
          <p class="card-header-title post-title">
            {{post.title}}
          </p>
        </header>
        <div class="card-content">
          <div class="content has-text-justified">
            {{cutString(post.body)}}
            <br>  
            <div class="has-text-right is-size-7">
              Carrera: <strong class="has-text-weight-semibold has-text-link">{{post.career}} Ing.Sistemas</strong>
            </div>       
            <div class="has-text-right is-size-7">
              Publicado por: <strong class="has-text-weight-semibold has-text-link">{{post.author}}</strong>
            </div>
            <div class="is-right has-text-right is-size-7">
              <time datetime="2018-1-1"><strong>{{postDate(post.created)}}</strong></time>
            </div>
          </div>
        </div>
        <footer class="">
          <div class="columns">
            <div class="column">
              <div class="buttons has-addons is-centered">
                <router-link :to="'post/view/' + post['.key']" class=" button is-link"><span class="icon"><i class="fa fa-plus" aria-hidden="true"></i></i></span>&nbsp; Ver mas</router-link>        
              </div>
            </div>
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
                <a class="button is-small is-link is-outlined" style="border: none;">
                  <span class="icon fa-lg">
                    <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import { postsRef } from '../../../config'
  import editorReadMode from './editor-read'

  export default {
    name: 'PostMain',
    data () {
      return {
        post: '',
        editorReadMode
      }
    },
    firebase: {
      posts: postsRef
    },
    methods: {
      postDate (epoch) {
      if (!epoch) return // if no time return nothing
        return moment(epoch).format('MM/DD/YY - hh:mm')
    },
    cutString (string) {
      let temp = string.replace(/<(?:.|\n)*?>/gm, '')
      return temp.substring(0, 370) + '...'
    }
  }
}
</script>

<style scoped>

</style>
