import { getAllClub } from '../../api';

export default {
    async FETCH_ALL_CLUB({ commit }, season){
        try{
            const res = await getAllClub(season);
            commit('SET_ALL_CLUB', res.data.team_all_season.queryResults.row);
            return res;
        } catch(err){
            console.error(err);
        };
    }
};