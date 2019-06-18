<template>
  <div class="home">
    <a href="/heros-spiderman" class="test">Spiderman</a>
    <a href="/heros-black_panther" class="test">Black Panther</a>
    <home-header/>
    <the-button/>
    <super-heros/>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import TheButton from '@/components/TheButton.vue'
import SuperHeros from '@/components/SuperHeros.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    TheButton,
    SuperHeros
  }
}
</script>

<style lang="scss" scoped>
  .test {
    padding-right: 50px;
  }
</style>
