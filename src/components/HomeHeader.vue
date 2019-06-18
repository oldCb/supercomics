<template>
  <div class="header">
    <h1>Find Your Super Heros</h1>
    <the-button />
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
  .header {
    text-align: center;
    margin: 90px 0 110px;
  }
</style>
