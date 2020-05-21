<template>
	<div>
		<app-header></app-header>
		<div v-show="isLoading">
			<loading-spinner></loading-spinner>
		</div>
		<div v-show="!isLoading">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner';
export default {
	components: {
		AppHeader,
		LoadingSpinner,
	},
	computed: {
		isLoading() {
			return this.$store.getters.getLoading;
		},
	},
};
</script>

<style>
@import url('css/style.css');
</style>
