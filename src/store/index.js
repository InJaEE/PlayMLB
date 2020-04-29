import vue from 'vue';
import vuex from 'vuex';
import actions from './module/actions.js';

vue.use(vuex);

export default new vuex.Store({
    state: {
        allClub: {},
    },
    getters: {
        fetchedAllClub(state){
            return state.allClub;
        }
    },
    mutations: {
        SET_ALL_CLUB(state, data){
            state.allClub = data;
        },
    },
    actions,
});