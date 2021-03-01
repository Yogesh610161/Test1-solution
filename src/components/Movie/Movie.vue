<template>
  <div class="Movie" v-if="loaded">
    <single-movie :id="imdbId" :movie="movie" />
  </div>
</template>

<script>
const { VUE_APP_GET_API } = process.env;
import SingleMovie from "../SingleMovie/SingleMovie.vue";
import { axios } from "../../common";
export default {
  components: { SingleMovie },
  name: "Movie",
  data() {
    return {
      movie: "",
      loaded: false,
    };
  },
  computed: {
    imdbId() {
      return this.$route.params.id;
    },
  },
  async mounted() {
    const { data } = await axios.get(`${VUE_APP_GET_API}i=${this.imdbId}`);
    this.movie = data;
    this.loaded = true;
  },
};
</script>

<style lang="scss" scoped></style>
