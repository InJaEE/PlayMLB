import axios from 'axios';

const baseUrl = "https://lookup-service-prod.mlb.com/json/";


function getAllClub(season){
    return axios.get(`${baseUrl}named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&season='${season}'`);
};

function getPlayer(playerCode){
    return axios.get(`${baseUrl}named.player_info.bam?sport_code='mlb'&player_id='${playerCode}'`);
}

export {
    getAllClub,
    getPlayer,
};
