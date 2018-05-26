<template>
  <div class="container users">

    <!-- users page title -->
    <div class="content-heading is-flex">
      <h3 class="is-size-3">Usuarios</h3>
      <router-link to="/admin/users/new" class="button is-info">Agregar Nuevo Usuario</router-link>
    </div>

    <transition mode="out-in" name="fade">
      <div v-if="notification.message" :class="'notification is-' + notification.type">
        <button class="delete" @click="hideNotifications"></button>{{notification.message}}
      </div>
    </transition>

    <!-- the new user form loaded via vue loader -->
    <router-view></router-view>

    <h5 class="is-size-5">Usuarios invitados</h5>
    <p class="has-text-grey">Nota: los usuarios invitados no pueden crear publicaciones</p>
    <!-- guests' requests table -->
    <div class="box">
      <table class="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Nombre de Usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Categoria</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in guests" :key="index">
            <td class="username-cell">
              {{user.username}}
              <div class="actions">
                <span v-if="currentUser.uid !== user['.key']" @click="setAdmin(user)" class="approve has-text-success">Administrador</span>
                <span v-if="currentUser.uid !== user['.key']" @click="setCoordinator(user)" class="approve has-text-primary">Coordinador</span>
                <span v-if="currentUser.uid === user['.key']" @click="deleteCurrentUser" class=" has-text-danger">Darme de Baja</span>
              </div>
            </td>
            <td class="firstname-cell">{{user.firstname}}</td>
            <td class="lastname-cell">{{user.lastname}}</td>
            <td class="email-cell">{{user.email}}</td>
            <td class="category-cell">{{user.category}}</td>
            <td class="role-cell">{{user.role}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5 class="is-size-5">Usuarios Coordinadores</h5>
    <p class="has-text-grey">Nota: los usuarios coordinadores pueden crear publicaciones</p>
    <!-- cordinators' requests table -->
    <div class="box">
      <table class="table is-fullwidth is-striped">
        <thead>
        <tr>
          <th>Nombre de Usuario</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Categoria</th>
          <th>Rol</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, index) in coordinators" :key="index">
          <td class="username-cell">
            {{user.username}}
            <div class="actions">
              <span v-if="currentUser.uid !== user['.key']" @click="setAdmin(user)" class="approve has-text-success">Administrador</span>
              <span v-if="currentUser.uid !== user['.key']" @click="setGuest(user)" class="approve has-text-danger">Invitado</span>
              <span v-if="currentUser.uid === user['.key']" @click="deleteCurrentUser" class=" has-text-danger">Darme de Baja</span>
            </div>
          </td>
          <td class="firstname-cell">{{user.firstname}}</td>
          <td class="lastname-cell">{{user.lastname}}</td>
          <td class="email-cell">{{user.email}}</td>
          <td class="category-cell">{{user.category}}</td>
          <td class="role-cell">{{user.role}}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <h5 class="is-size-5">Administradores</h5>
    <p class="has-text-grey">Nota: los usuarios administradores pueden gestionar a otros usuarios</p>
    <!-- the administrators table -->
    <div class="box">
      <table class="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Nombre de Usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Categoria</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in admins" :key="index" :class="{'logged-in' : currentUser.uid === user['.key']}">
            <td class="username-cell">
              {{user.username}}
              <div class="actions">
                <!-- display a delete button below the current logged in user -->
                <!-- v-if="currentUser.uid === user['.key']" -->
                <span v-if="currentUser.uid !== user['.key']" @click="setCoordinator(user)" class="ban has-text-primary">Coordinador</span>
                <span v-if="currentUser.uid !== user['.key']" @click="setGuest(user)" class="ban has-text-danger">Invitado</span>
                <span v-if="currentUser.uid === user['.key']" @click="deleteCurrentUser" class=" has-text-danger">Darme de Baja</span>
              </div>
            </td>
            <td class="firstname-cell">{{user.firstname}}</td>
            <td class="lastname-cell">{{user.lastname}}</td>
            <td class="email-cell">{{user.email}}</td>
            <td class="category-cell">{{user.category}}</td>
            <td class="role-cell">{{user.role}}</td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>

<script>
import notifier from '../../../mixins/notifier'

import firebase from 'firebase'
import { usersRef } from '../../../config'

export default {
  name: 'users',
  data () {
    return {
      currentUser: firebase.auth().currentUser
    }
  },
  firebase () {
    return {
      users: usersRef
    }
  },
  mixins: [notifier],
  methods: {
    // asignar rol administrador
    setAdmin (user) {
      this.$firebaseRefs.users.child(user['.key']).set({
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        category: user.category,
        role: 'administrador'
      })
      this.showNotification('success', 'Usuario aprobado como administrador')
    },
    // asignar rol coordinador
    setCoordinator (user) {
      this.$firebaseRefs.users.child(user['.key']).set({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        category: user.category,
        email: user.email,
        role: 'coordinador'
      })
      this.showNotification('success', 'Usuario aprobado como coordinador')
    },
    // asignar rol invitado
    setGuest (user) {
      this.$firebaseRefs.users.child(user['.key']).set({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        category: user.category,
        email: user.email,
        role: 'invitado'
      })
      this.showNotification('success', 'Usuario degradado a invitado')
    },
    // delete the current user
    deleteCurrentUser () {
      let vm = this
      // delete the current user from the firebase auth
      this.currentUser.delete()
        .then(function () {
          // delete the current user from the real time database
          vm.$firebaseRefs.users.child(vm.currentUser.uid).remove()
          console.log('user deleted successfuly')
        })
        .catch(function (error) {
          console.log(error.message)
        })
    }
  },
  computed: {
    admins () {
      return this.users.filter((user) => {
        return user.role === 'administrador'
      })
    },
    coordinators () {
      return this.users.filter((user) => {
        return user.role === 'coordinador'
      })
    },
    guests () {
      return this.users.filter((user) => {
        return user.role === 'invitado'
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.users {

  .content-heading {
    justify-content: baseline;
    align-content: center;
    align-items: center;
    h3 {
      margin: 1em 1em 1em 0em;
    }
  }

  .username-cell {
    width: 40%;
  }

  .firstname-cell {
    width: 5%;
  }

  .lastname-cell {
    width: 5%;
  }

  .email-cell {
    width: 20%;
  }

  .role-cell {
    width: 15%;
  }
  .category-cell {
    width: 15%;
  }

  h5 {
    padding-bottom: 10px;
  }

  .logged-in {
    background-color: #C1FFD7 !important;
  }
}
</style>
