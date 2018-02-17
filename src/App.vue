<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import Header from './components/header/Header'
  export default {
    name: 'App',
    components: {
      appHeader: Header
    }
  }
</script>

<style>
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
