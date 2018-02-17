<template>
    <div class="column is-12">
        <h2>Hello in our awesome page.</h2>
        <button class="button is-primary" @click="fethData">Feth data</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        methods: {
            fethData() {
                axios.get(axios.baseURL + '/product', axios.config)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>