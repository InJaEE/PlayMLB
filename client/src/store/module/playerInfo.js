import {
	getPlayers,
	getPlayerStat,
	getHitterSeasonStat,
	getPitcherSeasonStat,
} from '@/api/statApi';

const state = {
	searchWord: '',
	playerIdList: [],
	playersInfo: [],
	playerDetail: {},
	playerSesonStat: [],
};
const getters = {
	fetchedSearchWord: state => state.searchWord,
	fetchedPlayerIdList: state => state.playerIdList,
	fetchedPlayersInfo: state => state.playersInfo,
	fetchedPlayerDetail: state => state.playerDetail,
	fetchedPlayerSesonStat: state => state.playerSesonStat,
};
const mutations = {
	SET_SEARCH_WORD(state, data) {
		state.searchWord = data;
	},
	SET_PLAYER_ID_LIST(state, data) {
		state.playerIdList = data;
	},
	SET_PLAYERS_INFO(state, data) {
		state.playersInfo = data;
	},
	SET_PLAYER_DETAIL(state, data) {
		state.playerDetail = data;
	},
	SET_PLAYER_SEASON_STAT(state, data) {
		state.playerSeasonStat = data;
	},
};
const actions = {
	async FETCH_PLAYER_ID({ commit }, name) {
		try {
			const res = await getPlayers(name);
			const data = res.data.search_player_all.queryResults.row;
			const playerList = [];
			if (data.constructor === Object) {
				playerList.push(data.player_id);
			} else {
				data.forEach(v => {
					playerList.push(v.player_id);
				});
			}
			commit('SET_PLAYER_ID_LIST', playerList);
			return res;
		} catch (err) {
			console.error(err);
		}
	},
	FETCH_PLAYERS_DATA({ commit }, playerList) {
		const result = [];
		try {
			playerList.forEach(async v => {
				const res = await getPlayerStat(v);
				const data = res.data.player_info.queryResults.row;
				const playerInfo = {
					country: data.birth_country,
					birthCity: data.birth_city,
					name: data.name_display_first_last,
					age: data.age,
					twitter: data.twitter_id,
					debutDate: data.pro_debut_data,
					birthDate: data.birth_date,
					backNumber: data.jersey_number,
					playerId: data.player_id,
					position: data.primary_position_txt,
					batsHand: data.bats,
					throwsHand: data.throws,
					teamId: data.team_id,
					teamName: data.team_name,
					highSchool: data.high_school,
					nickname: data.name_nick,
					college: data.college,
				};
				result.push(playerInfo);
			});
			commit('SET_PLAYERS_INFO', result);
		} catch (err) {
			console.error(err);
		}
	},
	FETCH_HITTER_SEASON_STAT({ commit }, { playerId, to, from }) {
		const result = [];
		try {
			for (let i = to; i <= from; i++) {
				const res = getHitterSeasonStat(i, playerId);
				const data = res.data.sport_hitting_tm.queryResults.row;
				result.push(data);
			}
			commit('SET_PLAYER_SEASON_STAT', result);
		} catch (err) {
			console.error(err);
		}
	},
	FETCH_PITCHER_SEASON_STAT({ commit }, { playerId, to, from }) {
		const result = [];
		try {
			for (let i = to; i <= from; i++) {
				const res = getPitcherSeasonStat(i, playerId);
				const data = res.data.sport_pitching_tm.queryResults.row;
				result.push(data);
			}
			commit('SET_PLAYER_SEASON_STAT', result);
		} catch (err) {
			console.error(err);
		}
	},
};

export default { state, getters, mutations, actions };
