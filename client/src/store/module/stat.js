import { getAllClub, getHitterRank, getPitcherRank } from '@/api/statApi';

const state = {
	allClub: {},
	hitterRank: {},
	pitcherRank: {},
};
const getters = {
	fetchedAllClub: state => state.allClub,
	fetchedHitterRank: state => state.hitterRank,
	fetchedPitcherRank: state => state.pitcherRank,
};
const mutations = {
	SET_ALL_CLUB(state, data) {
		state.allClub = data;
	},
	SET_HITTER_RANK(state, data) {
		state.hitterRank = data;
	},
	SET_PITCHER_RANK(state, data) {
		state.pitcherRank = data;
	},
};
const actions = {
	async FETCH_ALL_CLUB({ commit }, season) {
		try {
			const res = await getAllClub(season);
			commit('SET_ALL_CLUB', res.data.team_all_season.queryResults.row);
			return res;
		} catch (err) {
			console.error(err);
		}
	},
	async FETCH_HITTER({ commit }, { season, statType }) {
		try {
			const res = await getHitterRank(season, statType);
			commit(
				'SET_HITTER_RANK',
				res.data.leader_hitting_repeater.leader_hitting_mux.queryResults.row,
			);
			return res;
		} catch (err) {
			console.error(err);
		}
	},
	async FETCH_PITCHER({ commit }, { season, statType }) {
		try {
			const res = await getPitcherRank(season, statType);
			commit('SET_PITCHER_RANK', res.data);
		} catch (err) {
			console.error(err);
		}
	},
};

export default {
	state,
	getters,
	mutations,
	actions,
};
