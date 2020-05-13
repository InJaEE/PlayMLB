<template>
	<div>
		<div class="league">
			<ul>
				<li>
					<span
						class="router"
						:class="{ selected: toggleLeague }"
						@click="movePage('al')"
					>
						<img
							width="25px"
							src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/American_League_logo.svg/125px-American_League_logo.svg.png"
							alt="American League"
						/>
						아메리칸리그
					</span>
				</li>
				<li>
					<span
						class="router"
						:class="{ selected: !toggleLeague }"
						@click="movePage('nl')"
					>
						<img
							width="25px"
							src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/MLB_National_League_logo.svg/200px-MLB_National_League_logo.svg.png"
							alt="National League"
						/>
						내셔널리그
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		toggleLeague() {
			const league = Object.values(this.$route.params).find(v => {
				return v === 'nl';
			});
			if (league === 'nl') {
				return false;
			}
			return true;
		},
	},
	methods: {
		movePage(league) {
			const routePath = this.$route.matched[0].path;
			const typePath = this.$route.params.type || 'team';
			this.$router.push(`${routePath}/${typePath}/${league}`);
		},
	},
};
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
ul a {
	color: black;
}
.selected {
	color: #3f75da;
}
.router:hover {
	cursor: pointer;
}
</style>
