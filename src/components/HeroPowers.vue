<template>
  <div class="hero_powers">
    <h2>Détails super pouvoirs</h2>
    <ul v-for="(power, index) in getHeroPowers" :key="index">
      <li>
        <h3>{{ power.name }}</h3>
        <p>{{ power.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroPowers',

  props: {
    currentName: String
  },

  data () {
    return {
      heroName: this.currentName,
      powers: []
    }
  },

  computed: {
    getHeroPowers () {
      switch (this.heroName) {
        case 'spiderman':
          this.powers.push(
            {
              name: 'Spiderman pouvoir 1',
              description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
            },
            {
              name: 'Spiderman pouvoir 2',
              description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
            }
          )
          break
        case 'black_panther':
          this.powers.push(
            {
              name: 'Black Panther pouvoir 1',
              description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
            },
            {
              name: 'Black Panther pouvoir 2',
              description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
            }
          )
          break
      }
      return this.powers
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
