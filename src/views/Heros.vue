<template>
  <div class="hero">
    <h1 class="hero_name">{{ herosName | formatHerosName }}</h1>
    <div class="hero_infos">
      <hero-slider :currentName="herosName" />
      <hero-snipet :currentName="herosName" />
    </div>
    <hero-stories :currentName="herosName" />
    <hero-powers :currentName="herosName" />
    <div class="hero_films_list">
      <hero-films :currentName="herosName" />
      <hero-animation-films :currentName="herosName" />
      <hero-animation-series :currentName="herosName" />
    </div>
  </div>
</template>

<script>
import HeroSlider from '@/components/HeroSlider'
import HeroSnipet from '@/components/HeroSnipet'
import HeroStories from '@/components/HeroStories'
import HeroPowers from '@/components/HeroPowers'
import HeroFilms from '@/components/HeroFilms'
import HeroAnimationFilms from '@/components/HeroAnimationFilms'
import HeroAnimationSeries from '@/components/HeroAnimationSeries'

export default {
  name: 'Hero',

  components: {
    HeroSlider,
    HeroSnipet,
    HeroStories,
    HeroPowers,
    HeroFilms,
    HeroAnimationFilms,
    HeroAnimationSeries
  },

  data () {
    return {
      herosName: this.$route.params.herosName,
      heroAlias: 'toto',
      heroPowers: 'toto, toto, toto, toto',
      heroAffiliation: 'Lorem, ipsum dolor sit amet consectetur',
      heroEditors: 'lorem, lorem, lorem',
      heroCreator: 'toto'
    }
  },

  filters: {
    formatHerosName (value) {
      return value.replace(/_/g, ' ').toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero {

    &_name {
      text-align: center;
      margin: 50px 0;
    }

    &_infos {
      display: flex;
      flex-direction: row;
      align-items: center;

      &_list {
        padding-left: 15px;
      }
    }

    &_films_list {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
</style>
