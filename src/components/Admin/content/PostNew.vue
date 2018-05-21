<template>
  <div class="box">

    <h3>Crear un nuevo post</h3>
    <div class="columns">

      <div class="column is-two-thirds">

        <!-- the new post title -->
        <div class="field">
          <label class="label">Título del post</label>
          <div class="control">
            <input type="text" class="input" v-model="title">
          </div>
        </div>

        <!-- rich text vue-quill-editor plugin -->
        <quill-editor v-model="body" :options="editorOptions">
        </quill-editor>
        <input type="file" id="getImage" style="display: none;" @change="uploadImage">

      </div>

      <!-- new post right sidebar -->
      <div class="column is-one-third">

        <!-- author -->
        <div class="field">
          <label class="label">Autor</label>
          <div class="control">
            <input type="text" class="input" v-model="author" maxlength="25" required>
            <p>Este campo es para cuestiones de demostración</p>
          </div>
        </div>

        <!-- tags -->
        <div class="field">
          <label class="label">Etiquetas</label>
          <div class="control">
            <input type="text" class="input" maxlength="25" v-model="tags">
            <p>Separar etiquetas con coma</p>
          </div>
        </div>
        <div class="field">
          <label class="label">Escoga la carrera de la publicación</label>
          <div class="control">
            <div class="select is-info ">
              <select v-model="category">
                <option disabled value="">Seleccione una Carrera</option>
                <option value="Sistemas">Sistemas</option>
                <option value="Enfermeria">Enfermería</option>
                <option value="Electrica">Eléctrica</option>
                <option value="Agronomia">Agronomía</option>
                <option value="Administracion">Administración</option>
                <option value="Economia">Economia Social</option>
                <option value="Servicio-Comunitario">Servicio Comunitario</option>
                <option value="Pasantias">Pasantias</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Escoga el conglomerado de publicación</label>
          <div class="control">
            <div class="select is-info ">
              <select v-model="subcategory">
                <option disabled value="">Seleccione un conglomerado</option>
                <option v-for="option in filteredSubCategory" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Imagen</label>
          <div class="control">
            <img :src="featuredImage">
            <div class="file">
              <label class="file-label">
                <input @change="uploadFeaturedImage" class="file-input" type="file" name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-upload"></i>
                  </span>
                  <span class="file-label">
                    Escoge un archivo…
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- notification -->
    <div v-if="notification.message" :class="'notification is-' + notification.type">
      <button class="delete" @click="hideNotifications"></button>{{notification.message}}
    </div>

    <!-- the form buttons -->
    <button type="submit" class="button is-info" @click="add">Publicar</button>
    <router-link to="/admin/posts" class="button is-danger">Cancelar</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

import { mediaRef } from '../../../config'
import { userRef } from '../../../config'
import editorOptions from './editor-options'
import imageLoader from '../../../mixins/image-loader'
import notifier from '../../../mixins/notifier'

export default {
  name: 'post-new',
  data () {
    return {
      title: '',
      body: '',
      author: '',
      category: '',
      subcategory: '',
      filteredSub: [],
      tags: '',
      featuredImage: '',
      editorOptions,
      user: []
    }
  },
  firebase: {
    media: mediaRef,
    users: userRef
  },
  props: ['add-post'],
  mixins: [imageLoader, notifier],
  methods: {
    add () {
      console.log(this.featuredImage)
      if (this.title) {
        this.addPost({
          title: this.title,
          body: this.body,
          author: this.author,
          category: this.category,
          subcategory: this.subcategory,
          tags: this.tags.replace(/ /g, '').split(','),
          img: this.featuredImage,
          created: Date.now()
        })
        this.$router.push({ path: '/admin/posts' })
      } else {
        this.showNotification('warning', 'The title field can not be empty')
      }
    },
    uploadFeaturedImage (e) {
      console.log(e)
      let file = e.target.files[0]
      let storageRef = firebase.storage().ref('images/' + file.name)

      storageRef.put(file).then((snapshot) => {
        console.log(snapshot)
        this.featuredImage = snapshot.downloadURL
        if (Object.values(this.media).find(e => e.path === snapshot.ref.fullPath)) return // this prevents duplicate entries in the media object
        this.$firebaseRefs.media.push({
          src: snapshot.downloadURL,
          path: snapshot.ref.fullPath,
          name: snapshot.metadata.name
        })
      })
    }
  },
  computed: {
    filteredSubCategory: function () {
      var cat = this.category
      if(cat === 'Sistemas'){
        return [
          { text: 'Estudiantes Regulares', value: 'sist-regulares' },
          { text: 'CINU', value: 'sist-cinu' },
          { text: 'Egresados', value: 'sist-egresados' },
          { text: 'Docentes', value: 'sist-docentes' }
        ]
      }else if(cat === 'Electrica') {
        return [
          { text: 'Estudiantes Regulares', value: 'elec-regulares' },
          { text: 'CINU', value: 'elec-cinu' },
          { text: 'Docentes', value: 'elec-docentes' }
        ]
      }else if(cat === 'Enfermeria') {
        return [
          { text: 'Estudiantes Regulares', value: 'enfer-regulares' },
          { text: 'CINU', value: 'enfer-cinu' }
        ]
      }else if(cat === 'Agronomia') {
        return [
          { text: 'Estudiantes Regulares', value: 'agro-regulares' },
          { text: 'CINU', value: 'agro-cinu' }
        ]
      }else if(cat === 'Administracion') {
        return [
          { text: 'Estudiantes Regulares', value: 'admin-regulares' },
          { text: 'CINU', value: 'admin-cinu' }
        ]
      }else if(cat === 'Economia') {
        return [
          { text: 'Estudiantes Regulares', value: 'econ-regulares' },
          { text: 'CINU', value: 'econ-cinu' }
        ]
      }else if(cat === 'Servicio-Comunitario') {
        return [
          { text: 'General', value: 'General' }
        ]
      }else if(cat === 'Pasantias') {
        return [
          { text: 'General', value: 'General' }
        ]
      }
    }
  },
  mounted: function () {
    
    console.log(this.user)
  }
}

</script>
