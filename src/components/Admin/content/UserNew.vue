<template>
  <div class="new-user box">

    <h4 class="is-size-4">Nuevo Usuario</h4>
    <form class=" columns">

      <!-- the new user required fields -->
      <div class="column is-two-thirds">
        <div lass="field columns">
          <div class="column">
            <label class="label is-capitalized">Nombre de Usuario</label>
          </div>
          <div class="control column">
            <input type="text" class="input" v-model="username">
          </div>
        </div>
        <div lass="field columns">
          <div class="column">
            <label class="label is-capitalized">Correo</label>
          </div>
          <div class="control column">
            <input type="email" class="input" v-model="email">
          </div>
        </div>
        <div lass="field columns">
          <div class="column">
            <label class="label is-capitalized">Primer Nombre</label>
          </div>
          <div class="control column">
            <input type="text" class="input" v-model="firstname">
          </div>
        </div>
        <div lass="field columns">
          <div class="column">
            <label class="label is-capitalized">Primer Apellido</label>
          </div>
          <div class="control column">
            <input type="text" class="input" v-model="lastname">
          </div>
        </div>
        <div lass="field columns">
          <div class="column">
            <label class="label is-capitalized">Contraseña</label>
          </div>
          <div class="control column">
            <input type="password" class="input" v-model="password">
          </div>
          <div lass="field columns">
            <div class="column">
            <label class="label is-capitalized">Coordinación/Dirección</label>
          </div>
            <div class="control column">
              <div class="select is-info ">
                <select v-model="category">
                  <option disabled value="">Coordinación</option>
                  <option value="Sistemas">Sistemas</option>
                  <option value="Enfermeria">Enfermería</option>
                  <option value="Electrica">Eléctrica</option>
                  <option value="Agronomia">Agronomía</option>
                  <option value="Administracion">Administración</option>
                  <option value="Economia">Economia Social</option>
                  <option value="Servicio-Comunitario">Servicio Comunitario</option>
                  <option value="Pasantias">Pasantias</option>
                  <option value="Todo">General</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- the new user role -->
      <div class="field column is-one-third">
        <label class="label">Rol del nuevo usuario:</label>
        <label class="is-block">
          <input type="radio" v-model="role" id="administrador" value="administrador"> Administrador
        </label>
        <label class="is-block">
          <input type="radio" v-model="role" id="coordinador" value="coordinador"> Coordinador
        </label>
        <label class="is-block">
          <input type="radio" v-model="role" id="invitado" value="invitado"> Invitado
        </label>
      </div>

    </form>

    <!-- the form buttons -->
    <button type="submit" class="button is-info" @click="RegisterUser">Agregar</button>
    <router-link to="/admin/users" class="button is-danger">Cancelar</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'user-new',
  data () {
    return {
      // this array contains all the required fields to add a new user
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      email: '',
      role: '',
      category: ''
    }
  },
  methods: {
    RegisterUser () {
    // check if all fields are filled
      if (this.email && this.username && this.password && this.category && this.role && this.firstname && this.lastname) {
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
        this.showNotification('success', 'Rellene todos los campos...')
      }
    },
    addUser (userUID) {
      // add the new user credentiels to the database using the same ID
      firebase.database().ref('users/' + userUID).set({
        username: this.username,
        email: this.email.toLowerCase(),
        firstname: this.firstname,
        lastname: this.lastname,
        category: this.category,
        role: this.role.toLowerCase()
      })
      this.showNotification('success', 'Usuario creado correctamente')
    }
  }
}

</script>

<style>
  .new-user,
  h4 {
    margin-bottom: 1em;
  }

</style>
