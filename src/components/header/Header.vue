<template>
    <div class="navGreyBar">
        <nav class="navbar is-transparent fncont">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    <img src="@/assets/logo.png" alt="Logo">
                </router-link>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <router-link class="navbar-item" to="/idea" activeClass="active">
                            Idea
                        </router-link>
                        <router-link class="navbar-item" to="/ranking" activeClass="active">
                            Ranking
                        </router-link>
                        <router-link class="navbar-item" to="/ranking" activeClass="active">
                            Zgłoś fake newsa
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
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
    .navbar {
        background: transparent;
    }
    .fncont {
        max-width: 1140px;
        margin: 0 auto;
    }
    .navGreyBar {
        background: #f9f9f9;
    }
    .navbar-item {
        text-transform: uppercase;
        font-weight: bold;
        color: #a3a3a3;
        &.active, a:hover {
            color: lighten(#a3a3a3, 10%);
        }
    }
</style>