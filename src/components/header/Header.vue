<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </router-link>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="https://bulma.io/">
                    Home
                </a>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <router-link class="navbar-item" to="/login" activeClass="active" v-if="!user.logged">
                        Login
                    </router-link>
                    <router-link class="navbar-item" to="/register" activeClass="active" v-if="!user.logged">
                        Register
                    </router-link>
                    <div class="dropdown is-right is-hoverable" v-if="user.logged">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Hi <b>{{ user.name }}</b></span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item">
                                    Link 1
                                </a>
                                <a class="dropdown-item">
                                    Link 2
                                </a>
                                <hr class="dropdown-divider">
                                <a href="#" class="dropdown-item">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        computed: {
            user() {
                return this.$store.getters.getUserData;
            }
        }
    }
</script>

<style lang="scss">
    .navbar-item {
        &.active {
            color: red;
        }
    }
</style>