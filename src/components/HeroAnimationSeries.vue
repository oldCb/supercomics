<template>
  <div class="hero_animation_series">
    <h2>Films d'animation</h2>
    <ul v-for="(serie, index) in series" :key="index">
      <li>{{ series[index] }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroAnimationSeries',
  data () {
    return {
      series: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum']
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
