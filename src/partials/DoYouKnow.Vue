<template>
  <section class="doyouknow">
    <h2 class="doyouknow__h">Czy wiesz, że?</h2>
    <p>
      {{data[actualDataShow]}}
    </p>
    <span class="doyouknow__btn doyouknow__btn--prev" v-if="actualDataShow>0" @click="actualDataShow--">Poprzedni</span>
    <span class="doyouknow__btn doyouknow__btn--next" v-if="actualDataShow<data.length-1" @click="actualDataShow++">Następny</span>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        actualDataShow: 0,
        data: ['Ilość lajków pod artykułem NIE ZAWSZE świadczy o jego wiarygodności', 'News 2', 'News3']
      }
    }
  }
</script>

<style scoped lang="scss">
  .doyouknow {
    text-align: center;
    margin: 40px 0 50px;
    padding: 16px;
    background: #5bd0ff;
    color: white;
    border-radius: 20px;
    position: relative;
    width: 261px;
    &__h {
      font-size: 30px;
      border-bottom: 1px solid white;
      padding-bottom: 20px;
    }
    p {
      margin: 20px 0 10px;
      font-size: 16px;
    }
    &__btn {
      position: absolute;
      color: #5bd0ff;
      background: transparent;
      bottom: -22px;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
      &--prev {
        left: 20px;
      }
      &--next {
        right: 20px;
      }
    }
  }
</style>
