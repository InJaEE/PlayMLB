import {
	getPlayers,
	getPlayerStat,
	getHitterSeasonStat,
	getPitcherSeasonStat,
	getPlayer,
} from '@/api/statApi';
import {
	formatDate,
	formatFeetInches,
	formatLb,
	formatPosition,
} from '@/utils/filters';

const state = {
	searchWord: '',
	playerIdList: [],
	playersInfo: [],
	playerDetail: [],
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
	RESET_PLAYER_LIST(state) {
		state.playerIdList = [];
		state.playersInfo = [];
	},
	RESET_PLAYER_DETAIL(state) {
		state.playerDetail = [];
	},
};
const actions = {
	// 검색 후 검색결과의 선수ID를 담아둔다.
	async FETCH_PLAYER_ID({ commit }, name) {
		try {
			const res = await getPlayers(name);
			const data = res.data.search_player_all.queryResults.row;
			const playerList = [];
			try {
				if (data.constructor === Object) {
					playerList.push(data.player_id);
				} else {
					data.forEach(v => {
						playerList.push(v.player_id);
					});
				}
			} catch (err) {
				if (err.name === 'TypeError') {
					alert('검색결과가 존재하지 않습니다');
				}
			}
			commit('SET_PLAYER_ID_LIST', playerList);
			return res;
		} catch (err) {
			console.error(err);
		}
	},
	// 여러명
	// 담아둔 선수ID로 기본정보 조회
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
					debutDate: formatDate(data.pro_debut_date),
					birthDate: formatDate(data.birth_date),
					backNumber: data.jersey_number,
					playerId: data.player_id,
					position: formatPosition(data.primary_position_txt),
					batsHand: data.bats === 'R' ? '우타' : '좌타',
					throwsHand: data.throws === 'R' ? '우투' : '좌투',
					teamId: data.team_id,
					teamName: data.team_name,
					highSchool: data.high_school,
					nickname: data.name_nick,
					college: data.college,
					height: formatFeetInches(data.height_feet, data.height_inches),
					weight: formatLb(data.weight),
				};
				result.push(playerInfo);
			});
			commit('SET_PLAYERS_INFO', result);
		} catch (err) {
			console.error(err);
		}
	},
	// 한명
	// 선수 ID로 상세정보 조회
	async FETCH_PLAYER_DATA({ commit }, playerId) {
		const result = [];
		const res = await getPlayer(playerId);
		const data = res.data.player_info.queryResults.row;
		const playerInfo = {
			country: data.birth_country,
			birthCity: data.birth_city,
			name: data.name_display_first_last,
			age: data.age,
			twitter: data.twitter_id,
			debutDate: formatDate(data.pro_debut_date),
			birthDate: formatDate(data.birth_date),
			backNumber: data.jersey_number,
			playerId: data.player_id,
			position: formatPosition(data.primary_position_txt),
			batsHand: data.bats === 'R' ? '우타' : '좌타',
			throwsHand: data.throws === 'R' ? '우투' : '좌투',
			teamId: data.team_id,
			teamName: data.team_name,
			highSchool: data.high_school,
			nickname: data.name_nick,
			college: data.college,
			height: formatFeetInches(data.height_feet, data.height_inches),
			weight: formatLb(data.weight),
		};
		result.push(playerInfo);
		commit('SET_PLAYER_DETAIL', result[0]);
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
