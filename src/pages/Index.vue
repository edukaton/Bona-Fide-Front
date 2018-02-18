<template>
    <div class="fnview">
        <div class="startview">
            <img src="@/assets/start.png" alt="" class="startview__popup">
            <img src="@/assets/graj.png" alt="" class="startview__play" @click="letsPlay">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
       methods: {
        letsPlay() {
            this.$router.push('/check')
        }
       }
    }
</script>

<style lang="scss">
    .fnview {
        min-height: 100vh;
    }
    .startview {
        position: relative;
        &__popup {
            display: block;
            margin: 50px auto 0;
            max-width: 400px;
        }
        &__play {
            position: absolute;
            width: 100px;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
        }
    }
</style>