<template>
  <div class="hero_stories">
    <div class="hero_stories-style">
      <h2>{{ storyName }}</h2>
      <p>{{ story }}</p>
    </div>
    <div class="hero_stories-style">
      <h2>{{ storyName }}</h2>
      <p>{{ story }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroStories',
  data () {
    return {
      storyName: 'histoires',
      story: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a reiciendis, totam, facilis atque, molestiae officiis provident perferendis placeat enim quae necessitatibus dignissimos explicabo aspernatur vitae eum possimus voluptate aliquam.'
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero_stories {
    margin: 50px 0;
  }
</style>
