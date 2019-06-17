<template>
  <div class="hero_films">
    <h2>Films</h2>
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
  name: 'HeroFilms'
}
</script>

<style lang="scss" scoped>
  .hero_films {
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
