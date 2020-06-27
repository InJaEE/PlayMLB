<template>
	<div>
		<app-header></app-header>
		<h1 v-if="isNotChrome">
			<chrome-warning></chrome-warning>
		</h1>
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
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ChromeWarning from '@/components/ChromeWarning.vue';
import { isChrome } from '@/utils/check';

export default {
	components: {
		AppHeader,
		LoadingSpinner,
		ChromeWarning,
	},
	data() {
		return {
			isNotChrome: false,
		};
	},
	computed: {
		isLoading() {
			return this.$store.getters.getLoading;
		},
	},
	created() {
		if (!isChrome) {
			this.isNotChrome = true;
		}
	},
};
</script>

<style>
@import url('css/style.css');
</style>
