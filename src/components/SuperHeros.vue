<template>
  <div class="listeHeros">
      <div class="superH" v-for="superhero in superheros" :key="superhero.id">

          <img src="">
          
          

      </div>

  </div>
</template>

<script>
export default {
  name: 'SuperHeros',
  data: function () {
    superheros: [
      { img:'/img/blackpanther.jpg', title: 'Black Panther', description: 'Black Panther est un super-héros évoluant dans l\'univers Marvel de la maison d\'édition Marvel Comics.' },
      { img:'/img/captainamerica.jpg', title: 'Captain America', description: 'Captain America est un super-héros de bande dessinée évoluant dans l\'univers Marvel de la maison d\'édition Marvel Comics.' },
      { img:'/img/batman.jpg', title: 'Batman', description: 'Bruce Wayne, alias Batman, est un héros de fiction appartenant à l\'univers de DC Comics.' }
    ]
  }
}

</script>

<style>
    .listeHeros {
        margin: auto;
        margin-top: 50px;
        margin-bottom: 50px;
        width: 900px;
        height: 900px;
        border: solid;
    }

    .superH {
        border: 1px solid;
        width: 300px;
        height: 300px;

    }


    .superH img {
        filter: grayscale(1);
        -webkit-filter: grayscale(1);
    }
    .superH img:hover {
        filter: grayscale(0);
        -webkit-filter: grayscale(0);
    }
    
</style>