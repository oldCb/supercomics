<template>
  <div class="snipet">
    <p>Alias : <span>{{ heroAlias }}</span></p>
    <p>Pouvoirs : <span>{{ heroPowers }}</span></p>
    <p>Affiliation : <span>{{ heroAffiliation }}</span></p>
    <p>Editeurs : <span>{{ heroEditors }}</span></p>
    <p>Créer par : <span>{{ heroCreator }}</span></p>
  </div>
</template>

<script>
export default {
  name: 'HeroSnipet',

  props: {
    currentName: String
  },

  data () {
    return {
      heroName: this.currentName,
      heroAlias: '',
      heroPowers: '',
      heroAffiliation: '',
      heroEditors: '',
      heroCreator: ''
    }
  },

  mounted () {
    this.getSnipet()
  },

  methods: {
    getSnipet () {
      switch (this.heroName) {
        case 'spiderman':
          this.heroAlias = 'Peter Parker',
          this.heroPowers = 'toto, toto, toto, toto',
          this.heroAffiliation = 'Lorem, ipsum dolor sit amet consectetur',
          this.heroEditors = 'Marvel',
          this.heroCreator = 'toto'
          break
        case 'black_panther':
          this.heroAlias = 'T\'Challa',
          this.heroPowers = 'toto, toto, toto, toto',
          this.heroAffiliation = 'Lorem, ipsum dolor sit amet consectetur',
          this.heroEditors = 'Marvel',
          this.heroCreator = 'toto'
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .snipet {
    padding-left: 15px;
  }
</style>
