<template>
    <div id="login" class="logbox columns">
        <div class="column is-4 is-offset-4">
            <h1 class="title">Login</h1>
            <h2 class="subtitle">to our app</h2>
            <form @submit.prevent="loginSubmit">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="Login" required v-model="email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password" required minlength="3" v-model="password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success">
                            Login
                        </button>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            loginSubmit() {
                var _th = this;
                axios.post(axios.baseURL + '/auth/local', {
                    identifier: this.email,
                    password: this.password
                })
                .then(function (response) {
                    // console.log(response);
                    var data = response.data;
                    _th.$store.dispatch('logIn', {
                        name: data.user.username,
                        email: data.user.email,
                        logged: true,
                        jwt: data.jwt,
                    });
                    axios.config = {
                        headers: {
                            Authorization: 'Bearer ' + data.jwt,
                        }
                    }
                    _th.$router.push('/') 
                })
                .catch(function (error) {
                    console.log(error);
                });
            }   
        }
    }
</script>

<style>
    .logbox {
        margin: 100px auto;
    }
</style>