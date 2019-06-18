<template>
  <div class="hero_stories">
    <div v-for="(story, index) in stories" :key="index">
      <div class="hero_stories-style">
        <h2>{{ story.name }}</h2>
        <p>{{ story.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroStories',

  props: {
    currentName: String
  },

  data () {
    return {
      heroName: this.currentName,
      stories: []
    }
  },

  mounted () {
    this.getHeroStories()
  },

  methods: {
    getHeroStories () {
      switch (this.heroName) {
        case 'spiderman':
          this.stories.push(
            {
              name: 'Spiderman histoire 1',
              description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
            },
            {
              name: 'Spiderman histoire 2',
              description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
            }
          )
          break
        case 'black_panther':
          this.stories.push(
            {
              name: 'Black Panther histoire 1',
              description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
            },
            {
              name: 'Black Panther histoire 2',
              description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
            }
          )
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero_stories {
    margin: 50px 0;
  }
</style>
