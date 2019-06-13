<template>
  <div class="nav">
    <div class="nav_site">
      <div class="nav_site_img">
        <img src="../../assets/img/logo.jpg" alt="logo">
      </div>
      <h1>SuperComics</h1>
    </div>
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

    &_site {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 50%;

      &_img {
        width: 100px;

        & img {
          width: 100%
        }
      }
    }
  }
</style>
