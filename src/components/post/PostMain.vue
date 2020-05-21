<template>
	<div>
		<post-list></post-list>
	</div>
</template>

<script>
import PostList from './PostList.vue';

export default {
	components: {
		PostList,
	},
	created() {
		// this.$store.commit('SET_LOADING', true);
		// setTimeout(() => {
		// 	this.$store.commit('SET_LOADING', false);
		// }, 3000);
	},
};
</script>

<style></style>
