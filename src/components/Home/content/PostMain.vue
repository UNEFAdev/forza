<template>
  <div class="columns ">
    <div class="column">
      <div v-for="(post, index) in posts" :key="index" class="card card-right ">
        <header class="card-header">
          <p class="card-header-title">
            {{post.title}}
          </p>
        </header>
        <div class="card-content">
          <div class="has-text-justified">
            Publicado por: <strong class="has-text-weight-semibold">{{post.author}}</strong>
          </div>
          <br>
          <div class="content has-text-justified">
            {{cutString(post.body)}}
            <br>
            <br>
            <time datetime="2016-1-1">Fecha de publicación: {{postDate(post.created)}}</time>
          </div>
        </div>
        <footer class="">
          <div class="buttons has-addons is-centered">
            <div class="is-centered">
              <router-link :to="'post/view/' + post['.key']" class=" button is-info ">Ver mas</router-link>
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
      return moment(epoch).format('MM/DD/YY | hh:mm')
    },
    cutString (string) {
      let temp = string.replace(/<(?:.|\n)*?>/gm, '')
      return temp.substring(0, 200) + '...'
    }
  }
}
</script>

<style scoped>

</style>
