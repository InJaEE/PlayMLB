import { instance } from './index';

function getAllClub(season) {
	return instance.get(
		`/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&season='${season}'`,
	);
}

function getPlayers(name) {
	return instance.get(
		`/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${name}%25'`,
	);
}

function getPlayer(playerId) {
	return instance.get(
		`/named.player_info.bam?sport_code='mlb'&player_id='${playerId}'`,
	);
}

function getPlayerStat(playerId) {
	return instance.get(
		`/named.player_info.bam?sport_code='mlb'&player_id='${playerId}'`,
	);
}

function getPitcherRank(season, recordType) {
	return instance.get(
		`/named.leader_pitching_repeater.bam?sport_code='mlb'&results=20&game_type='R'&season='${season}'&sort_column='${recordType}'`,
	);
}

function getHitterRank(season, recordType) {
	return instance.get(
		`/named.leader_hitting_repeater.bam?sport_code='mlb'&results=20&game_type='R'&season='${season}'&sort_column='${recordType}'`,
	);
}

function getHitterSeasonStat(season, playerId) {
	return instance.get(
		`/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='${season}'&player_id='${playerId}'`,
	);
}
function getPitcherSeasonStat(season, playerId) {
	return instance.get(
		`/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='${season}'&player_id='${playerId}'`,
	);
}

function getHitterCareerStat(playerId) {
	return instance.get(
		`/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='${playerId}'`,
	);
}

function getPitcherCareerStat(playerId) {
	return instance.get(
		`/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id='${playerId}'`,
	);
}

export {
	getAllClub,
	getPlayers,
	getPlayer,
	getPlayerStat,
	getPitcherRank,
	getHitterRank,
	getHitterSeasonStat,
	getPitcherSeasonStat,
	getHitterCareerStat,
	getPitcherCareerStat,
};
