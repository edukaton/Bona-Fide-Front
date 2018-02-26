<template>
  <div class="usersitebar">
    <img src="@/assets/POZIOM.png" alt="">
    <div class="usersitebar__tarcza">
      <img src="@/assets/player_bg.png" alt="">
      <img src="@/assets/man.png" alt="" class="usersitebar__g" v-if="gender == 1">
      <img src="@/assets/woman.png" alt="" class="usersitebar__g"  v-if="gender == 2">
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      gender() {
        return window.playerChooice;
      }
    }
  }

</script>

<style lang="scss">
  .usersitebar {
    img {
      margin-bottom: 20px;
    }
    &__tarcza {
      position: relative;
    }
    &__g {
      position: absolute;
      top: 40%;
      left: 42%;
      transform: translate(-50%, -50%);
      width: 120px;
    }
  }
</style>
