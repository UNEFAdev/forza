<template>
  <div class="container login">
    <div class="columns is-centered is-vertical-aligned is-fullheight is-flex">
      <div class="column box is-one-third">

        <!-- warning notification -->
        <div v-if="err.code" class="notification is-warning">
          <button class="delete" @click="hideNotif"></button>{{err.message}}
        </div>

        <!-- warning notification -->
        <div v-if="userUID" class="notification is-success">
          <button class="delete" @click="hideNotif"></button> Ahora estas registrado.
          Accederas a la pagina de administración cuando tu cuenta se haya verificado.
        </div>

        <!-- tamiat CMS logo -->
        <div class="columns is-flex is-centered is-mobile">
          <figure class="column is-half has-text-centered">
            <p class="is-size-5">Registro</p>
            <router-link to="/"></router-link>
          </figure>
        </div>

        <!-- username -->
        <div class="field columns">
          <div class="control column">
            <input type="text" class="input" placeholder="Usuario" v-model="username" @focus="hideNotif">
          </div>
        </div>

        <!-- email -->
        <div class="field columns">
          <div class="control column">
            <input type="email" class="input" placeholder="Correo" v-model="email" @focus="hideNotif">
          </div>
        </div>

        <!-- password -->
        <div class="field columns">
          <div class="control column">
            <input type="password" class="input" placeholder="Contraseña" v-model="password" @focus="hideNotif">
          </div>
        </div>
        <div class="field columns is-centered">
          <div class="control column is-narrow">
            <div class="select is-info ">
              <select v-model="category">
                <option value="Sistemas">Ing. Sistemas</option>
                <option value="Enfermeria">Enfermería</option>
                <option value="Electrica">Ing. Eléctrica</option>
                <option value="Agronomia">Ing. Agronómica</option>
                <option value="Economia">Economia Social</option>
                <option value="Administracion">Administracion y gestión Social</option>
                <option value="Servicio Comunitario">Servicio Comunitario</option>
                <option value="Pasantias">Pasantias</option>
              </select>
            </div>
          </div>
        </div>
        <!-- submit button -->
        <button class="button is-info is is-fullwidth" @click="signUp">Registrarse</button>
        <p>
          Ya tienes una cuenta?
          <router-link to="/login">Iniciar Sesión</router-link>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'sign-up',
  data () {
    return {
      // All the fields required in the login page
      username: '',
      category: '',
      email: '',
      password: '',
      err: {
        code: '',
        message: ''
      },
      userUID: ''
    }
  },
  methods: {
    signUp () {
      // check if all fields are filled
      if (this.email && this.username && this.password && this.category) {
        // create a new user with the provided email and password
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            // if user created successfully add it to the db and display a success message
            this.userUID = user.uid
            this.addUser(user.uid)
          })
          // if creating user fails display an error message
          .catch(err => Object.assign({}, err))
      } else {
        this.err.code = '¡Campos vacios!'
        this.err.message = 'Por favor rellene todos los campos'
      }
    },
    hideNotif () {
      // hide all notifications
      this.err.code = ''
      this.err.message = ''
      this.userUID = ''
    },
    addUser (userUID) {
      // add the new user credentiels to the database using the same ID
      firebase.database().ref('users/' + userUID).set({
        username: this.username,
        email: this.email,
        category: this.category,
        role: 'guest'
      })
    }
  }
}

</script>

<style>
  html,
  body,
  #app {
    background-color: #F1F1F1;
  }

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

</style>
