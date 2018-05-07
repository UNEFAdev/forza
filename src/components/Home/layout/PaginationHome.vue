<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class="pagination-previous button is-link is-outlined">Anterior</a>
    <a class="pagination-next button is-link is-outlined">Siguiente</a>
    <ul class="pagination-list">
      <li><a class="pagination-link is-current" aria-label="Goto page 1" aria-current="page">1</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" aria-label="Goto page 3">3</a></li>
      <li><a class="pagination-link" aria-label="Page 4">4</a></li>
      <li><a class="pagination-link" aria-label="Goto page 5">5</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" aria-label="Goto page 7">7</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'PaginationHome'
  }
</script>


<style scoped>

</style>