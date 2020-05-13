<template>
	<div>
		<div class="toggleheader">
			<span
				class="router"
				:class="{ selected: toggleType }"
				@click="movePage(firstValue[currentPage])"
			>
				<slot name="team"></slot>
			</span>
			|
			<span
				class="router"
				:class="{ selected: !toggleType }"
				@click="movePage(secondValue[currentPage])"
			>
				<slot name="player"></slot>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			firstValue: ['team', 'hitter'],
			secondValue: ['player', 'pitcher'],

			infoValue: ['team', 'player', 'al', 'nl'],
			statValue: ['hitter', 'pitcher'],
		};
	},
	computed: {
		toggleType() {
			let routePath = this.$route.params.type;
			if (
				routePath === this.firstValue[this.currentPage] ||
				routePath === undefined ||
				routePath === 'al' ||
				routePath === 'nl'
			) {
				return true;
			} else {
				return false;
			}
		},
		currentPage() {
			let pathIndex = -1;
			const path = this.$route.matched[0].path;
			if (path === '/info') {
				pathIndex = 0;
			} else if (path === '/stat') {
				pathIndex = 1;
			}
			return pathIndex;
		},
	},
	methods: {
		movePage(type) {
			const routePath = this.$route.matched[0].path;
			this.$router.push(`${routePath}/${type}`);
		},
	},
};
</script>

<style scoped>
.toggleheader {
	text-align: left;
	font-size: 16px;
	font-weight: bold;
	color: #777;
}
.router:hover {
	cursor: pointer;
}
.selected {
	color: #3f75da;
}
</style>
