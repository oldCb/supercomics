<template>
  <div class="hero_powers">
    <h2>Détails super pouvoirs</h2>
    <ul v-for="(power, index) in powers" :key="index">
      <li>
        <h3>{{ power.name }}</h3>
        <p>{{ power.infos }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroPowers',
  data () {
    return {
      powers: [
        {
          name: 'lorem',
          infos: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
        },
        {
          name: 'lorem',
          infos: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero_powers {
    margin: 50px 0;

    & ul {
      padding-left: 20px;
    }
  }
</style>
