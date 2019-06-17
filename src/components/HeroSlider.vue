<template>
  <div class="slider">
    <img :src="images[currentImage % images.length]" alt="spiderman">
  </div>
</template>

<script>
export default {
  name: 'HeroSlider',

  data () {
    return {
      images: [
        '/img/spiderman/1.jpg',
        '/img/spiderman/2.jpg',
        '/img/spiderman/3.jpg'
      ],
      currentImage: 0,
      timer: null
    }
  },

  methods: {
    startSlider () {
      this.timer = setInterval(this.next, 3000)
    },
    next () {
      this.currentImage++
    }
  },

  mounted () {
    this.startSlider()
  }

}
</script>

<style lang="scss" scoped>
  .slider  {
    text-align: center;

    & img {
      width: 60%;
    }
  }
</style>
