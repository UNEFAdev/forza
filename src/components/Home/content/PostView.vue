<template>
<div class="box">
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ post.title }}</strong>
          <br>
        </p>
        <p><strong>{{ post.author }}</strong> <small>{{postDate(post.created)}}</small></p>
        <p>Relacionado con: <strong>{{post.category}}</strong></p>
        <p><span v-html="post.body"></span></p>
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
    retrievePost () {
      
    },
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
