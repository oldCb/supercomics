<template>
    <div class="catSuperHeros">
        <div class="cat">
            <ul>
                <li>categorie</li>
                <li>categorie</li>
                <li>categorie</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'TheButton'

    }

</script>

<style>
    .catSuperHeros {
        width: 33%;
        margin: auto


    }
    .cat {
        margin-left: auto;
        margin-right: auto;
    }

    ul li {
        display:inline;
        background-color: red;
        padding: 20px;
        margin: 10px;
        border-radius: 30px
    
    }

</style>