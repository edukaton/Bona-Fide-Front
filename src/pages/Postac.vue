<template>
  <div class="postac">
    <div class="postacview">
      <img src="@/assets/wybierz-postac.png" alt="" class="postac__postac">
      <img src="@/assets/ui__hero-male.png" alt="" class="postac__p postac__man" @click="choose('man')">
      <img src="@/assets/ui__hero-female.png" alt="" class="postac__p postac__woman" @click="choose('woman')">
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      choose(g) {
        if(g == 'woman') {
          window.playerChooice = 2;
        } else {
          window.playerChooice = 1;
        }
        this.$router.push('/check')
      }
    }
  }
</script>

<style lang="scss">
  .postac {
    padding-bottom: 150px;
    .postacview {
      position: relative;
    }
    &__postac {
      display: block;
      margin: 50px auto 0;
      max-width: 400px;
    }
    &__p {
      display: block;
      position: absolute;
      width: 80px;
      top: 40%;
      left: 50%;
      cursor: pointer;
    }
    &__man {
      width: 82px;
      transform: translate(calc(-50% - 60px), 0);
    }
    &__woman {
      transform: translate(calc(-50% + 60px), 0);
    }
  }

</style>
