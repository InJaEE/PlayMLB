import { getPlayers, getPlayerStat } from '@/api/statApi';

const state = {
	searchWord: '',
	playerIdList: [],
	playersInfo: [],
};
const getters = {
	fetchedSearchWord: state => state.searchWord,
	fetchedPlayerIdList: state => state.playerIdList,
	fetchedPlayersInfo: state => state.playersInfo,
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
					국적: data.birth_country,
					이름: data.name_display_first_last,
					나이: data.age,
					데뷔날짜: data.pro_debut_data,
					생일: data.birth_date,
					등번호: data.jersey_number,
				};

				result.push(playerInfo);
			});
			commit('SET_PLAYERS_INFO', result);
		} catch (err) {
			console.error(err);
		}
	},
};

export default { state, getters, mutations, actions };
