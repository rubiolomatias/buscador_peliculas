<template>
  <div class="d-flex justify-content-center align-items-center container buscador">
    <form @submit.prevent="busqueda">
      <div class="mb-3">
        <label for="buscador" class="form-label">Ingrese titulo de alguna pelicula</label>
        <input type="text" class="form-control" id="buscador" aria-describedby="emailHelp" v-model="nombre">
      </div>
      <button type="submit" class="btn btn-info">Buscar</button>
      <div v-if="active" class="alert alert-danger d-flex align-items-center justify-content-center w-70" role="alert">
        <div>
          Ingrese un titulo
        </div>
      </div>
    </form>
  </div>

  <div v-if="film" class="container d-flex flex-column">
    <h2>{{ film.Title }}</h2>
    <img :src="film.Poster" alt="">
    <p v-if="film.Director">Director: {{ film.Director }}</p>
    <p v-if="film.Year">Lanzamiento: {{ film.Year }}</p>
    <p v-if="film.Genre">Genero: {{ film.Genre }}</p>
    <p v-if="film.Metascore">Rating: {{ film.Metascore }}/100</p>
  </div>
  <div v-if="encontrar" class="alert alert-danger d-flex align-items-center justify-content-center w-70" role="alert">
        <div>
          No se encontrro ninguna pelicula
        </div>
      </div>
  
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  name: 'BuscadorPeliculas',
  data(){
    return{
      nombre:'',
      film:Object,
      buscar:false,
      encontrar:false
    }
  },
  methods:{
    busqueda(){
      if(this.nombre === ''){
        this.active = true;
        return
      }
      this.active = false;
      let titulo = this.nombre.replace(/ /g, "+")
      EventService.getTitle(titulo)
        .then(response => {
          this.film = response.data
        })
        .catch(error => {
          console.log(error)
      })
      if(this.film.Response == "False"){
        this.encontrar = true;
      }
    }
  }
}
</script>

<style scoped>
  .buscador{
    background-color: #f5f5f5;
    border-radius: 20px;
    box-shadow: 1px 1px  #ddd;
    padding: 20px 0;
    margin: 20px auto;
  }
  form{
    width: 500px;
  }
  img{
    height: 200px;
    object-fit: contain;
  }
  .alert{
    margin-top: 20px;
    padding: 0;
  }
</style>
