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
  data () {
    return {
      stories: [
        {
          name: 'Histoires',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
        },
        {
          name: 'Histoires',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero_stories {
    margin: 50px 0;
  }
</style>
