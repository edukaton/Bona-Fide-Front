<template>
    <button>
        {{text}}
        <i class="fas fa-angle-right"></i>
    </button>
</template>

<script>
    export default {
        props: ['text']
    }
</script>

<style lang="scss" scoped> 
    button {
        border: 0;
        cursor: pointer;
        /* width: 121px; */
        padding: 20px 40px;
        /* height: 72px; */
        color: white;
        text-transform: uppercase;
        background: #fb8333;
        border-radius: 20px;
        font-size: 18px;
        margin: 0 auto;
        svg {
            display: inline-block;
            margin-left: 8px;
        }
    }
</style>