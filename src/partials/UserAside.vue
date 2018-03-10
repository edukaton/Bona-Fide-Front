<template>
  <div class="ui__aside-container">
    <div class="ui__aside-wrapper">
      <img src="@/assets/ui__hero-male.png" alt="" class="ui__aside-hero" v-if="gender == 1">
      <img src="@/assets/ui__hero-female.png" alt="" class="ui__aside-hero" v-if="gender == 2">
      <h3 class="ui__aside-name">Gracz</h3>
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
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=VT323&subset=latin-ext");

.ui__aside- {
  &container {
    display: flex;
    justify-content: center;
    width: 310px;
    height: 430px;
  }
  &wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url("/static/ui__aside-wrapper.png") no-repeat;
    width: 310px;
    height: 430px;
    position: relative;
  }
  &hero {
    width: 150px;
    height: 218px;
    margin: 0 auto;
  }
  &name {
    font-family: "VT323", monospace;
    text-align: center;
    font-size: 40px;
    margin-top: 25px;
    text-transform: uppercase;
  }
}
</style>
