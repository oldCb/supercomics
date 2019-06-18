<template>
    <div class="catSuperHeros">
      <ul>
        <li>Marvel</li>
        <li>DC Comics</li>
        <li>Mangas</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'TheButton'

}
</script>

<style scoped>
    .catSuperHeros {
      text-align: center;
      margin: 50px;
    }
    ul {
      padding-left: 0;
    }
    li {
      display:inline;
      background-color: #888787;
      padding: 20px;
      margin: 10px;
      border-radius: 30px
    }
</style>
