<template>
  <div class="slider">
    <img :src="images[currentImage % images.length]" :alt="herosName">
  </div>
</template>

<script>
export default {
  name: 'HeroSlider',

  props: {
    currentName: String
  },

  data () {
    return {
      herosName: this.currentName,
      currentImage: 0,
      timer: null
    }
  },

  methods: {
    startSlider () {
      this.timer = setInterval(this.next, 2000)
    },
    next () {
      this.currentImage++
    }
  },

  mounted () {
    this.startSlider()
  },

  computed: {
    images () {
      return [
        '/img/' + this.herosName + '/1.jpg',
        '/img/' + this.herosName + '/2.jpg',
        '/img/' + this.herosName + '/3.jpg'
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
  .slider  {
    text-align: center;

    & img {
      width: 340px;
      height: 200px;
      object-fit: cover;
    }
  }
</style>
