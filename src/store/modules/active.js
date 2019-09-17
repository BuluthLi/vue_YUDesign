var language = window.localStorage.getItem('language') ? window.localStorage.getItem('language') : 'zh';
console.log(language);
const state = {
    headerActive: 0
}
const getters = {
    value: (state, getters, rootState) => {
        return state.headerActive;
    }
}
const actions = {
    acChangeValue: ({ commit, state }, data) => {
        commit('changeValue', data);
    }
}
const mutations = {
    changeValue: (state, data) => {
        state.headerActive = data
    }
}
export default {
    namespaced: true,
    state, getters, actions, mutations
}