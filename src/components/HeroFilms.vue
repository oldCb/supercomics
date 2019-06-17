<template>
  <div class="hero_films">
    <h2>Films</h2>
    <ul v-for="(film, index) in films" :key="index">
      <li>{{ films[index] }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroFilms',
  data () {
    return {
      films: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum']
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero_films {
    width: 25%;
    margin: 50px 0;
    text-align: center;

    & ul {
      list-style: none;
      padding-left: 0;
    }
  }
</style>
