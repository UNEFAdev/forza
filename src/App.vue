<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="sass">

html,
body,
#app,
.admin
  background-color: #Fefefe
  height: 100%
  width: 100%
  margin: 0px
  padding: 0px
.button.is-info
  background-color: #3273dc;
.bulma
  @import "../node_modules/bulma/bulma"
  *
    box-sizing: border-box

  @import '../node_modules/bulma-extensions/bulma-accordion/dist/bulma-accordion'

</style>
