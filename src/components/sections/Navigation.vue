<template>
  <div class="nav">
    <div class="nav_logo">
      <a href="/">
        <img src="../../assets/img/logo.jpg" alt="logo">
      </a>
    </div>
    <h1>SuperComics</h1>
    <search-input />
  </div>
</template>

<script>
import SearchInput from '../SearchInput'

export default {
  name: 'Navigation',
  components: {
    SearchInput
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    height: 100px;
    border-bottom: 1px solid;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    &_logo img {
      width: 100px;
    }
  }
</style>
