<template>
  <div id="app">
    <component :is="nav">
      <router-view />
    </component>
    <router-view class="page" />
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
  .page {
    margin-bottom: 50px;
  }
</style>
