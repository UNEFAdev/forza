<template>
  <div class="container login bulma">
    <div class="columns is-centered is-vertical-aligned is-fullheight is-flex">
      <div class="column box is-one-third log" style="background-color:#3273dc;">

        <!-- notification -->
        <div v-if="notification.message" :class="'notification is-' + notification.type">
          <button class="delete" @click="hideNotifications"></button>{{notification.message}}
        </div>

        <!-- tamiat CMS logo -->
        <div class="columns is-flex is-centered is-mobile">
            <router-link to="/"><p class="is-size-3" style="color:#fff;">FORZA SYSTEM</p></router-link>
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
import { usersRef } from '../../config'
export default {
  name: 'log-in',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  firebase: {
    users: usersRef
  },
  mixins: [notifier],
  methods: {
    login () {
      // login to firebase with email and password
      if (! this.email || ! this.password){
        this.showNotification('warning', 'Rellene todos los campos...')
        return
      }
      this.$firebaseRefs.users.orderByChild('email').equalTo(this.email).limitToFirst(1).once('value').then(function (snapshot) {
          if( ! snapshot.val() ) {
            this.showNotification('warning', 'Los datos no coinciden con nuestros registros...')
            return
          }
            let user
            let values = snapshot.val()
            let key = Object.keys(values)
            user = values[key[0]]
            if ( user.role === 'invitado' ){
              this.showNotification('warning', 'Su cuenta aun no se ha verificado... Lo sentimos.')
              return
            } else {
              firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                  // redirect to the admin page
                  

                  this.$router.push('/admin')
                })
                .catch((error) => {
                  // display an warning notification
                  if(error.code === 'auth/wrong-password'){
                    this.showNotification('warning', 'La contraseña es incorrecta...')
                  }else{
                    this.showNotification('warning', error.message)
                  }
                  
                })
            }

          }.bind( this ) )

      
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
/*  background-color: #363c61 !important;
background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-3.png");*/
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}
.log{
      webkit-box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important;
    -webkit-box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important;
    box-shadow: 0 2px 3px #211f1f40, 1px 10px 15px 2px #211f1f40 !important;
}
</style>
