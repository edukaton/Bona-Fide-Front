<template>
    <div class="fa-popup" v-if="popupOpen">
        <div class="fa-popup__content">
            <h2>Some info</h2>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                popupOpen: false
            }
        }
    }
</script>

<style>
    .fa-popup {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.8);
    }
    .fa-popup__content {
        padding: 80px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 46%;
        background: url('/static/popup.png');
        background-size: cover;
    }
</style>