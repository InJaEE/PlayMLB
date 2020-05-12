import { instance } from './index';

function getAllClub(season) {
	return instance.get(
		`/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&season='${season}'`,
	);
}

function getPlayer(playerCode) {
	return instance.get(
		`/named.player_info.bam?sport_code='mlb'&player_id='${playerCode}'`,
	);
}

function getPitcherRank(season, recordType) {
	return instance.get(
		`/named.leader_pitching_repeater.bam?sport_code='mlb'&results=10&game_type='R'&season='${season}'&sort_column='${recordType}'`,
	);
}

function getHitterRank(season, recordType) {
	return instance.get(
		`/named.leader_hitting_repeater.bam?sport_code='mlb'&results=10&game_type='R'&season='${season}'&sort_column='${recordType}'`,
	);
}

export { getAllClub, getPlayer, getPitcherRank, getHitterRank };
