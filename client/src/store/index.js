import vue from 'vue';
import vuex from 'vuex';
import actions from './module/actions.js';

vue.use(vuex);

export default new vuex.Store({
    state: {
        allClub: {},
        player: {},
    },
    getters: {
        fetchedAllClub: state => state.allClub,
        fetchedPlayer: state => state.player,
    },
    mutations: {
        SET_ALL_CLUB(state, data){
            state.allClub = data;
        },
        SET_ONE_PLAYER(state, data){
            state.player = data;
        }
    },
    actions,
});