<template>
  <div class="home">
    <BuscadorPeliculas/>
  </div>
</template>

<script>
import BuscadorPeliculas from '@/components/BuscadorPeliculas.vue'
export default {
  name: 'HomeView',
  components: {
    BuscadorPeliculas
  }
}
</script>
