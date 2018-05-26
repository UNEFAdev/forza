<template>
  <div class="container posts" id="posts">

    <!-- posts page title -->
    <div class="content-heading is-flex" style="padding: 5% 0 1%;">
      <h3 class="is-size-3">Publicaciones</h3>
      <router-link to="/admin/posts/new" class="button is-info" style="margin: 0 2%;">Crear Publicación</router-link>
    </div>

    <!-- notification -->
    <transition mode="out-in" name="fade">
      <div v-if="notification.message" :class="'notification is-' + notification.type">
        <button class="delete" @click="hideNotifications"></button>{{notification.message}}
      </div>
    </transition>

     <!-- modal for post delete -->
    <transition mode="out-in" name="fade">
      <modal @close="showModal = false" :kind="kind" @confirmDeletePost='confirmDeletePost()' v-if="showModal" :header="header"/>
    </transition>

    <!-- the new post form loaded via vue router -->
      <router-view :add-post="addPost" :update-post="updatePost" :posts="posts" :key="$route.name + ($route.params.key || '')"></router-view>

    <!-- posts list -->
    <div class="box">
      <table class="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Categoria</th>
            <th>Creación</th>
            <th>Etiquetas</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in postByUserCategory" :key="index">
            <td class="post-title-cell">
              <router-link v-if="ownPost(post) || isAdmin()" :to="'/admin/posts/edit/' + post['.key']">
                {{post.title}}
              </router-link>
              <div v-else>
                {{post.title}}
              </div>
              <div v-if="ownPost(post) || isAdmin()" class="actions">
                <router-link :to="'/admin/posts/edit/' + post['.key']">
                  <span class="has-text-info">Editar</span>
                </router-link>
                <span @click="deletePost(post)" class="has-text-danger">Borrar</span>
              </div>
            </td>

            <td class="post-author-cell">{{post.author}}</td>
            <td class="post-author-cell">{{post.category}}</td>
            <td class="post-tags-cell">{{postDate(post.created)}}</td>
            <td class=" tag is-info">
              <span v-if="post.tags">
                {{joined(post.tags)}}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'
import { postsRef, usersRef } from '../../../config'
import notifier from '../../../mixins/notifier'
import modal from '@/components/shared/Modal'
import axios from 'axios'
export default {
  name: 'posts',
  data () {
    return {
      currentUser: firebase.auth().currentUser,
      showModal: false,
      header: '',
      kind: '',
      post: '',
      errors: [],
      key: '',
      entries: [],
      user: [],
      data: []
    }
  },
  firebase: {
    posts: postsRef,
    users: usersRef
  },
  mixins: [notifier],
  methods: {
    ownPost (post) {
      let author = this.user.firstname + ' ' + this.user.lastname
      return post.author === author
    },
    isAdmin (post) {
      return this.user.role === 'administrador'
    },
    addPost (post) {
      this.$firebaseRefs.posts.push(post).then(function (snap) {
        this.key = snap.key
        this.showNotification('success', 'Entrada publicada correctamente')
        this.data = {
          'type': 'POST',
          'category': post.category,
          'title': post.title,
          'message': this.cutString(post.body),
          'post_url': 'http://forza.cf/post/view/' + this.key,
          'button': {
            'text': 'Detalles acá',
            'url': 'http://forza.cf/post/view/' + this.key
          }
        }
        console.log(this.data)
        axios.post(
          'https://discomycetous-male.000webhostapp.com/process.php',
          JSON.stringify(this.data)).then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
        }).catch(e => {
          console.log(e)
        })
      }.bind(this))
    },
    cutString (string) {
      let temp = string.replace(/<(?:.|\n)*?>/gm, '')
      let text = temp.replace(/&nbsp;/gi,'');
      return text.substring(0, 370) + '...'
    },
    deletePost (post) {
      // delete post form firebase
      this.header = '¿Seguro quieres eliminar esta entrada?'
      this.kind = 'deletePost'
      this.showModal = true
      this.post = post
    },
    confirmDeletePost () {
      this.$firebaseRefs.posts.child(this.post['.key']).remove().then(() => {
        this.showNotification('success', 'Entrada eliminada correctamente')
        this.showModal = false
        this.post = ''
      })
    },
    updatePost (post) {
      console.log(JSON.stringify(post), post)
      // create a copy of the item
      let tempPost = { ...post }
      // remove the .key attribute
      delete tempPost['.key']
      this.$firebaseRefs.posts.child(post['.key']).set(tempPost).then(() => {
        this.showNotification('success', 'Entrada actualizada correctamente')
      })
    },
    postDate (epoch) {
      if (!epoch) return // if no time return nothing
      return moment(epoch).format('MM/DD/YY | hh:mm')
    },
    joined (t) {
      return Object.values(t).join(', ')
    }
  },
  components: {
    modal
  },
  computed: {
    postByUserCategory: function () {
      let posts = this.posts
      return posts.filter((post) => {
        if (this.user.category === 'Todo') {
          return posts
        } else {
          return post.category === this.user.category
        }
      }).slice().reverse()
    }
  },
  mounted: function () {
    this.$firebaseRefs.users.orderByKey().equalTo(this.currentUser.uid).limitToFirst(1).once('value').then(function (snapshot) {
      let values = snapshot.val()
      let key = Object.keys(values)
      this.user = values[key[0]]
    }.bind(this))
  }
}

</script>

<style lang="scss">
#posts {
  .post-title-cell {
    width: 50%;
  }
  .post-author-cell {
    width: 25%;
  }
  .post-tags-cell {
    width: 25%;
  }
}
</style>
