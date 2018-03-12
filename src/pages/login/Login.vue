<template>
    <div id="login" class="logbox columns">
        <div class="column is-6 is-offset-3">
            <h1 class="title">Logowanie</h1>
            <form @submit.prevent="loginSubmit">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Adres email" required v-model="email">
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Hasło" required minlength="3" v-model="password">
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button">
                            Zaloguj
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
                _th.$router.push('/postac') 
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
    .logbox h1 {
        text-align: center;
    }
    .logbox > .column {
        padding: 80px;
        background: url('/static/popup.png');
        background-size: cover;
    }
    .logbox input {
        background: transparent;
        color: #000;
        border: 0;
        border-bottom: 2px solid #412c17;
    }
    .logbox button {
        display: block;
        background: url('/static/btnOk.png');
        border: 0;
        width: 162px;
        height: 80px;
        font-size: 24px;
        margin: 0 auto;
    }
</style>