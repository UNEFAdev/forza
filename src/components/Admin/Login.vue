<template>
  <div class="container login bulma">
    <div class="columns is-centered is-vertical-aligned is-fullheight is-flex">
      <div class="column box is-one-third log">

        <!-- notification -->
        <div v-if="notification.message" :class="'notification is-' + notification.type">
          <button class="delete" @click="hideNotifications"></button>{{notification.message}}
        </div>

        <!-- tamiat CMS logo -->
        <div class="columns is-flex is-centered is-mobile">
            <router-link to="/"><p class="is-size-3" style="color:#3273dc;">FORZA SYSTEM</p></router-link>
        </div>

        <!-- email -->
        <div class="field columns">
          <div class="control column">
            <input type="email" class="input" placeholder="Correo" v-model="email">
          </div>
        </div>

        <!-- password -->
        <div class="field columns">
          <div class="control column">
            <input type="password" class="input" placeholder="Contraseña" v-model="password">
          </div>
        </div>

        <!-- submit button -->
        <button type="submit" class="button is-info is is-fullwidth" @click="login">Entrar</button>

      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import notifier from '../../mixins/notifier'

export default {
  name: 'log-in',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mixins: [notifier],
  methods: {
    login () {
      // login to firebase with email and password
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          // redirect to the admin page
          this.$router.push('/admin')
        })
        .catch((error) => {
          // display an warning notification
          this.showNotification('warning', error.message)
        })
    }
  }
}

</script>

<style>
.is-vertical-aligned {
  align-items: center;
}

.is-fullheight {
  height: 100vh;
}

.login>div {
  padding: 20px;
}

.login .box {
  padding: 20px 10px;
}

.login p {
  margin-top: 1em;
  font-size: 0.8em;
}
html, #app{
  background-color: #363c61;
background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-3.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}
.log{
      webkit-box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important;
    -webkit-box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important;
    box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important;
}
</style>
