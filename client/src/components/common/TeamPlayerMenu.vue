<template>
	<div>
		<div class="toggleheader">
			<span
				class="router"
				:class="{ selected: toggleType === 'team' || undefined }"
				@click="movePage('team')"
			>
				<slot name="team"></slot>
			</span>
			|
			<span
				class="router"
				:class="{ selected: toggleType === 'player' ? true : false }"
				@click="movePage('player')"
			>
				<slot name="player"></slot>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		toggleType() {
			return this.$route.params.type;
		},
	},
	methods: {
		movePage(type) {
			const routePath = this.$route.matched[0].path;
			let param = '';
			if (routePath === '/stat') {
				let league = this.$route.params.type;
				if (league === undefined) {
					league = 'al';
				}
				param = `${league}/${type}`;
			} else if (routePath === '/info') {
				param = type;
			}
			this.$router.push(`${routePath}/${param}`);
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
