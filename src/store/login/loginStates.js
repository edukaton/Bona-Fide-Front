const state = {
    user: {
        name: null,
        email: null,
        logged: false,
        jwt: null
    }
};

const mutations = {
    'LOGIN' (state, {name, email, logged, jwt}) {
        state.user.name = name;
        state.user.email = email;
        state.user.logged = logged;
        state.user.jwt = jwt;
    } 
};

const actions = {
    logIn({commit}, userData) {
        commit('LOGIN', userData);
    }
}

const getters = {
    getUserData(state) {
        return state.user;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}