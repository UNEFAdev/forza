<template>
<div class="box">
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ title }}</strong>
          <br>
        </p>
        <p><strong>{{ author }}</strong> <small>{{postDate(created)}}</small></p>
        <p>Relacionado con: <strong>{{category}}</strong></p>
        <p><span v-html="body"></span></p>
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
      body: '',
      title: '',
      category: '',
      author: '',
      created: ''
    }
  },
  mounted () {
    console.log('hola')
    this.retrievePost()
  },
  firebase: {
    posts: postsRef
  },
  methods: {
    retrievePost () {
      let body
      let title
      let author
      let category
      let created
      this.$firebaseRefs.posts.orderByKey().equalTo(this.$route.params.key).limitToFirst(1).on('child_added', function (snapshot) {
        title = snapshot.val().title
        body = snapshot.val().body
        category = snapshot.val().category
        author = snapshot.val().author
        created = snapshot.val().created
      })
      this.body = body
      this.title = title
      this.author = author
      this.category = category
      this.created = created
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
