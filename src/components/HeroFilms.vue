<template>
  <div class="hero_films">
    <h2>Films</h2>
    <ul v-for="(film, index) in films" :key="index">
      <li>{{ film }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroFilms',

  props: {
    currentName: String
  },

  data () {
    return {
      heroName: this.currentName,
      films: []
    }
  },

  created () {
    this.getHeroFilms()
  },

  methods: {
    getHeroFilms () {
      switch (this.heroName) {
        case 'spiderman':
          this.films.push('films spiderman', 'films spiderman', 'films spiderman', 'films spiderman', 'films spiderman')
          break
        case 'black_panther':
          this.films.push('films black panther', 'films black panther', 'films black panther', 'films black panther', 'films black panther')
          break
      }
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
