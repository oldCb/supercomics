<template>
  <div class="home">
    <home-header/>
    <super-heros/>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import SuperHeros from '@/components/SuperHeros.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    SuperHeros
  }
}
</script>

<style lang="scss" scoped>
  .test {
    padding-right: 50px;
  }
</style>
