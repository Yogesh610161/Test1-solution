import Vue from "vue";
import Router from "vue-router";
import Movies from "./components/Movies/Movies.vue";
import Movie from "./components/Movie/Movie.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/:id",
    name: "Movie",
    component: Movie,
  },
];

const router = new Router({
  routes,
  mode: "history",
});

export default router;
