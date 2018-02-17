import Vue from 'vue';
import Vuex from 'vuex';

import loginStates from './login/loginStates';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        loginStates
    }
});