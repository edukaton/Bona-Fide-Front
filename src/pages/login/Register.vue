<template>
    <div id="register" class="logbox columns">
        <div class="column is-4 is-offset-4">
            <h1 class="title">Register</h1>
            <h2 class="subtitle">to our app</h2>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password">
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
        </div>
    </div>
</template>

<style>
    .logbox {
        margin: 100px auto;
    }
</style>