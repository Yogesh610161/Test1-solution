<template>
  <div class="singleMovie">
    <div class="poster">
      <img :src="movie.Poster" class="poster" :alt="movie.Title" />
    </div>
    <div class="movieData">
      <h3>
        <router-link :to="{ name: 'Movie', params: { id: movie.imdbID } }">{{
          movie.Title
        }}</router-link>
      </h3>
      <p class="genreRuntime">
        <span class="runtime">{{ movie.Runtime }}</span>
        <span class="ghost">|</span>
        <span class="genre"> {{ movie.Genre }} </span>
      </p>
      <p class="ratings">
        <i class="fa fa-star"></i>
        <strong>{{ movie.imdbRating }}</strong>
        <span class="ghost" v-if="!id"></span>
        <span
          v-if="!id"
          class="addToFav"
          @click="$emit('updateFav', movie.imdbID)"
          >Add as Favorite</span
        >
      </p>
      <p class="storyLine">
        {{ movie.Plot }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie", "favMovies", "id"],
};
</script>

<style lang="scss" scoped>
div[class="Movie"] {
  background: black;
}
div[class="singleMovie"] {
  margin: 3em 8em;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  div[class="movieData"] {
    padding: 1em;
    display: flex;
    color: white;
    flex-direction: column;
    
    h3 {
      font-size: 24px;
      font-weight: normal;
    }
    a {
      color: white;
      text-decoration: none;
    }
    p[class="genreRuntime"] {
      color: whitesmoke;
      font-size: 0.9em;
      margin: 1em 0;
    }
    p[class="ratings"] {
      font-size: 1.3em;
      order: 5;
      span[class="ghost"] {
        display: block;
        margin: 0 1em;
      }
      i[class="fa fa-star"] {
        color: #ffd700;
        margin: 0 0.4em;
      }
      span[class="addToFav"] {
        cursor: pointer;
        margin-top: 10px;
        display: block;
        &:hover {
          color: #ffd700;
          opacity: 0.8;
        }
      }
      i[class="fa fa-star grayed"] {
        margin: 0 0.4em;
      }
    }
    p[class="storyLine"] {
      margin: 1em;
      line-height: 160%;
    }
  }
}
</style>
