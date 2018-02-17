<template>
  <div class="ranksmall">
    <img src="@/assets/rank.png" alt="">
    <a class="ranksmall__row">
      <img src="@/assets/p1.png" alt="">
      <span>Magda Wesoła</span>
    </a>
    <a class="ranksmall__row">
      <img src="@/assets/p2.png" alt="">
      <span>Damianek Nie</span>
    </a>
    <a class="ranksmall__row">
      <img src="@/assets/p3.png" alt="">
      <span>Ewa Hej</span>
    </a>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss">
  .ranksmall {
    &__row {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img {
        margin-right: 10px;
      }
      span {
        font-size: 18px;
        font-weight: bold;
        color: black;
      }
      &:hover {
        background: #fb8333;
      }
    }
  }

</style>
