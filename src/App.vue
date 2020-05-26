<template>
	<div>
		<app-header></app-header>
		<h1 v-if="isNotChrome">
			<a-icon type="warning" theme="twoTone" twoToneColor="#f44336" />
			<span class="browser_warning">
				이 사이트는 크롬 브라우저에서 최적화돼있습니다.
			</span>
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
import LoadingSpinner from '@/components/common/LoadingSpinner';
import isChrome from '@/utils/browserChk';

export default {
	components: {
		AppHeader,
		LoadingSpinner,
	},
	data() {
		return {
			isNotChrome: false,
			alertModalStatus: {
				visible: false,
				title: '이 사이트는 크롬 브라우저에서 최적화돼있습니다.',
				subTitle: '',
				status: 'warning',
			},
		};
	},
	computed: {
		isLoading() {
			return this.$store.getters.getLoading;
		},
	},
	created() {
		if (!isChrome) {
			this.alertModalStatus.visible = true;
			this.isNotChrome = true;
		}
	},
};
</script>

<style>
@import url('css/style.css');
.browser_warning {
	-webkit-text-stroke: 1px #000;
}
</style>
