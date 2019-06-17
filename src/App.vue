<template>
  <div id="app">
    <component :is="nav">
      <router-view />
    </component>
    <router-view id="app_container" class="app_page" />
    <component :is="footer">
      <router-view />
    </component>
  </div>
</template>

<script>
const NAV_SECTION = 'navigation'
const FOOTER_SECTION = 'theFooter'

export default {
  computed: {
    nav () {
      return (this.$route.meta.section || NAV_SECTION) + '-section'
    },
    footer () {
      return (this.$route.meta.section || FOOTER_SECTION) + '-section'
    }
  }
}
</script>

<style lang="scss">
  #app {
    & a, & a:visited, & a:hover {
      text-decoration: none;
      color: #000;
    }
    &_container {
      width: 80%;
      margin: 0 auto;
    }
    &_page {
      margin-bottom: 50px;
      text-align: justify;
    }
  }
</style>
