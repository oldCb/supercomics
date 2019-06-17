<template>
  <div class="home">
    <home-header/>
    <the-button/>
    <super-heros/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader.vue'
import TheButton from '@/components/TheButton.vue'
import SuperHeros from '@/components/SuperHeros.vue'

export default {
  name: 'home',
  components: {
    HomeHeader,
    TheButton,
    SuperHeros
  }
}
</script>
