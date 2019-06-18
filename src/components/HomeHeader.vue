<template>
  <div class="header">
    <div class="title">
      <h1>Find Your Super Heros</h1>
    </div>
    <the-button/>
  </div>
</template>

<script>
import TheButton from './TheButton'

export default {
  name: 'HomeHeader',
  components: {
    TheButton
  }
}
</script>

<style>
  .title h1 {
    text-align: center;
    margin: 50px 0;
  }
</style>
