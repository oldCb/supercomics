<template>
  <div class="hero_animation_series">
    <h2>Films d'animation</h2>
    <ul v-for="(serie, index) in series" :key="index">
      <li>{{ serie }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroAnimationSeries',

  props: {
    currentName: String
  },

  data () {
    return {
      heroName: this.currentName,
      series: []
    }
  },

  created () {
    this.getHeroSeries()
  },

  methods: {
    getHeroSeries () {
      switch (this.heroName) {
        case 'spiderman':
          this.series.push('series spiderman', 'series spiderman', 'series spiderman', 'series spiderman', 'series spiderman')
          break
        case 'black_panther':
          this.series.push('series black panther', 'series black panther', 'series black panther', 'series black panther', 'series black panther')
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero_animation_series {
    width: 25%;
    margin: 50px 0;
    text-align: center;

    & ul {
      list-style: none;
      padding-left: 0;
    }
  }
</style>
