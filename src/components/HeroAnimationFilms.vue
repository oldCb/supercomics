<template>
  <div class="hero_animation_films">
    <h2>Films d'animation</h2>
    <ul v-for="(animation, index) in animations" :key="index">
      <li>{{ animations[index] }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroAnimationFilms',
  data () {
    return {
      animations: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum']
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
