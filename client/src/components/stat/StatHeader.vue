<template>
  <div>
      <div class="statHeader">
        <span class="router" :class="{selected: !toggleType}" @click="moveTeamPage">
          팀 순위
        </span>
        |  
        <span class="router" :class="{selected: toggleType}" @click="movePlaygerPage">
          선수 순위
        </span>
      </div>
      <div class="league">
          <ul>
              <li>
                <router-link to="/stat/al">
                  <span :class="{selected: toggleLeague}">
                    <img width="25px" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/American_League_logo.svg/125px-American_League_logo.svg.png" alt="American League">
                    아메리칸리그
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/stat/nl">
                  <span :class="{selected: !toggleLeague}">
                    <img width="25px" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/MLB_National_League_logo.svg/200px-MLB_National_League_logo.svg.png" alt="National League">
                    내셔널리그

                  </span>
                </router-link>
              </li>
          </ul>
      </div>
      <div class="yearBtn">
        <button>2019</button>
        <button>2018</button>
        <button>2017</button>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    toggleLeague(){
      const league = this.$route.params.league;
      if(league === 'nl'){
        return false;
      }
      return true;
    },
    toggleType(){
      const type = this.$route.params.type;
      if(type === 'player'){
        return true;
      }
      return false;
    }
  },
  methods: {
    moveTeamPage(){
      let league = this.$route.params.league;
      if(league === undefined){
        league = 'al';
      };
      this.$router.push(`/stat/${league}/team`);
    },
    movePlaygerPage(){
      let league = this.$route.params.league;
      if(league === undefined){
        league = 'al';
      };
      this.$router.push(`/stat/${league}/player`);
    },
  },
}
</script>

<style scoped>
.statHeader {
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  color: #777;
}
.statHeader a {
  color: #777;
}
ul {
  text-align: center;
  padding: 10px 0 10px 0;
  border-top: solid 3px black;
  border-bottom: solid 1px black;
  font-weight: bold;
}
li {
  list-style-type: none;
  display: inline-block;
  padding: 0 10px 0 10px;
  font-size: 20px;
  width: 45%;
}
ul a{
  color: black;
}
.selected {
  color: #3F75DA;
}
.router:hover {
  cursor: pointer;
}
</style>