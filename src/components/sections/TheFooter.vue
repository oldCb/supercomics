<template>
  <div class="footer">
    <div class="footer_network">
      <p>mettre icon et liens vers réseaux sociaux</p>
    </div>
    <div class="footer_contact">
      <p>supercomics@gmail.com / etc</p>
    </div>
    <div class="footer_copyright">
      <p>Copyright</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top: 1px solid;
    position: relative;
    bottom: 0;
    height: 50px;
    width: 100%;
  }
</style>
