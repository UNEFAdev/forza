<template>

  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <a href="/" class="has-text-weight-semibold has-text-link"><i class="fa fa-arrow-left" aria-hidden="true"></i> Atras</a>
          <p class="is-right has-text-right" style="margin: 0;padding: 0;"><span class="is-size-7">Relacionado con: </span><strong class="has-text-weight-semibold has-text-link">{{post.category}}</strong></p>
          <p class="is-right has-text-right" style="margin: 0;padding: 0;"><span class="is-size-7">Dirigido a: </span><strong class="has-text-weight-semibold has-text-link">{{post.subcategory}}</strong></p>
          <p class="is-right has-text-right"><span class="is-size-7">Autor: </span><strong class="has-text-weight-semibold has-text-link"> {{post.author}}</strong><br><strong class="is-size-7">{{postDate(post.created)}}</strong></p>
          <h4 class="has-text-centered">
            <strong class="has-text-link">{{post.title}}</strong>
          </h4>
          <p><span v-html="post.body" class="has-text-justified"></span></p>
          <p class="is-pulled-right">
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
    </article>
  </div>
</template>

<script>
  import moment from 'moment'
  import { postsRef } from '../../../config'

export default {
  name: 'PostView',
  data () {
    return {
     post: {}
    }
  },
  mounted () {

    this.$firebaseRefs.posts.orderByKey().equalTo(this.$route.params.key).limitToFirst(1).once('value').then(function (snapshot) {
      let shotemp = snapshot.val()
      let key = Object.keys(shotemp)
      this.post = shotemp[key[0]]
    }.bind(this))

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
      return temp.substring(0, 200) + '...'
    }
  }
}
</script>

<style scoped>

</style>
