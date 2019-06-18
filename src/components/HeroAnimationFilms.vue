<template>
  <div class="hero_animation_films">
    <h2>Films d'animation</h2>
    <ul v-for="(animation, index) in getHeroAnimation" :key="index">
      <li>{{ animations[index] }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroAnimationFilms',

  props: {
    currentName: String
  },

  data () {
    return {
      heroName: this.currentName,
      animations: []
    }
  },

  computed: {
    getHeroAnimation () {
      switch (this.heroName) {
        case 'spiderman':
          this.animations.push('animation spiderman', 'animation spiderman', 'animation spiderman', 'animation spiderman', 'animation spiderman')
          break
        case 'black_panther':
          this.animations.push('animation black panther', 'animation black panther', 'animation black panther', 'animation black panther', 'animation black panther')
          break
      }
      return this.animations
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero_animation_films {
    width: 25%;
    margin: 50px 0;
    text-align: center;

    & ul {
      list-style: none;
      padding-left: 0;
    }
  }
</style>
