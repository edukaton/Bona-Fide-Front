<template>
  <div class="checknews__tv">
    <img :src="'/static/articles/'+imglink" alt="" class="checknews__img">
    <!-- <img src="/assets/articles/article0.png" alt="" class="checknews__img"> -->
  </div>
</template>

<script>
    export default {
        props: ['imglink'],
    }
</script>

<style lang="scss">
  .checknews {
    &__tv {
      margin-bottom: 50px;
      img {
        display: block;
        background-size: cover;
        width: 80%;
        margin: 0 auto;
        padding: 80px 0;
      }
    }
  }

</style>
