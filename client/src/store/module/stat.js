import { getAllClub } from '@/api/statApi';

const state = {
    allClub: {},
    ALteam: [],
    NLteam: [],
    player: {},
};
const getters = {
    fetchedAllClub: state => state.allClub,
};
const mutations = {
    SET_ALL_CLUB(state, data){
        state.allClub = data;
    },
    SET_ONE_PLAYER(state, data){
        state.player = data;
    },
};
const actions = {
    async FETCH_ALL_CLUB({ commit }, season){
        try {
            const res = await getAllClub(season);
            console.log("#", res);
            
            commit('SET_ALL_CLUB', res.data.team_all_season.queryResults.row);
            return res;
        } catch (err) {
            console.error(err);
        }
    },
    async FETCH_ONE_PLAYER({ commit }, code){
        try{
            const res = await getPlayer(code);
            commit('SET_ONE_PLAYER', res.data.player_info.queryResults.row);
            return res;
        } catch(err){
            console.error(err);
        }
    }
};

export default {
    state, getters, mutations, actions,
}