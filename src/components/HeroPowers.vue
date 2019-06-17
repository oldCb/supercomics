<template>
  <div class="hero_powers">
    <h2>Détails super pouvoirs</h2>
    <ul>
      <li>{{ powersInfos }}</li>
      <li>{{ powersInfos }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroPowers',
  data () {
    return {
      powersInfos: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero_powers {
    margin: 50px 0;

    & ul {
      padding-left: 20px;

      & li {
        padding-bottom: 15px;
      }
    }
  }
</style>
