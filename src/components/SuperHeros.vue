<template>
  <div class="listeHeros">
      <div class="superH" v-for="superhero in superheros" :key="superhero.id">
          <div class="image">
            <a :href="'/heros-' + superhero.path">
              <img :src="superhero.img">
            </a>
          </div>
          <div class="description">
            <p>{{superhero.title}}</p>
            <p>{{superhero.description}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SuperHeros',
  data () {
    return {
      superheros: [
        { path: 'black_panther', prod: 'marvel', img: '/img/blackpanther.jpg', title: 'Black Panther', description: 'Black Panther est un super-héros évoluant dans l\'univers Marvel de la maison d\'édition Marvel Comics.' },
        { path: 'captain_america', prod: 'marvel', img: '/img/captainamerica.jpg', title: 'Captain America', description: 'Captain America est un super-héros de bande dessinée évoluant dans l\'univers Marvel de la maison d\'édition Marvel Comics.' },
        { path: 'batman', prod: 'dc_comics', img: '/img/batman.jpg', title: 'Batman', description: 'Bruce Wayne, alias Batman, est un héros de fiction appartenant à l\'univers de DC Comics.' },
        { path: 'spiderman', prod: 'marvel', img: '/img/spiderman.jpg', title: 'Spiderman', description: 'Spiderman est un super-héros évoluant dans l\'univers Marvel de la maison d\'édition Marvel Comics.' }
      ]
    }
  }
}

</script>

<style scoped>
    .listeHeros {
      margin: auto;
      margin-top: 50px;
      margin-bottom: 50px;
      width: 900px;
      height: 900px;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start
    }

    .superH {
      width: 298px;
      height: 210px;
    }

    .superH img {
      width: 298px;
      height: 210px;
      filter: grayscale(1);
      -webkit-filter: grayscale(1);
      animation: scaledown .4s linear;
      animation-fill-mode: forwards;
      cursor: pointer;
    }
    .superH img:hover {
      filter: grayscale(0);
        -webkit-filter: grayscale(0);
      z-index: 100;
      animation: scale 0.4s linear;
      animation-fill-mode: forwards;
    }

    @keyframes scaledown {
      0%{
        -webkit-transform: scale(1.5);
          transform: scale(1.5);
      }
      50% {
        -webkit-transform: scale(1.25);
          transform: scale(1.25);
      }
      100% {
        -webkit-transform: scale(1.0);
          transform: scale(1.0);
      }
    }

    @keyframes scale {
      0%{
        -webkit-transform: scale(1);
          transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.25);
          transform: scale(1.25);
      }
      100% {
        -webkit-transform: scale(1.5);
          transform: scale(1.5);
      }
    }
    .description {
      display: none
    }

</style>
