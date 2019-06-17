<template>
  <div class="hero_animation_films">
    <h2>Films d'animation</h2>
    <ul>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroAnimationFilms'
}
</script>

<style lang="scss" scoped>
  .hero_animation_films {
    width: 25%;
    margin: 50px 0;

    & h2 {
      text-align: center;
    }

    & ul {
      list-style: none;
      padding-left: 30px;
    }
  }
</style>
