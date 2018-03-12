<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
    <appPopup></appPopup>
  </div>
</template>

<script>
  import Header from './components/header/Header'
  import Popup from './partials/Popup'
  export default {
    name: 'App',
    components: {
      appHeader: Header,
      appPopup: Popup
    }
  }
</script>

<style>

  body {
    background: url('assets/bg.png');
    background-size: cover;
  }

  #app {
    padding-bottom: 80px;
  }

  * {
    font-family: 'Yanone Kaffeesatz', sans-serif;
  }

  .columns {
    max-width: 1140px;
  }

  .doyouknow {
    background: url('assets/tarcza.png');
    background-size: cover;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .checknews__tv {
    background: url('assets/tv.png') !important;
    background-size: cover !important;
  }

  .slide-enter-active {
    animation: slide-in .2s ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out .2s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
