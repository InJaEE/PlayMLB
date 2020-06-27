<template>
	<div>
		<a-icon type="warning" theme="twoTone" twoToneColor="#f44336" />
		<span class="browser_warning">
			이 사이트는 크롬 브라우저에서 최적화돼있습니다.
		</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			alertModalStatus: {
				visible: false,
				title: '이 사이트는 크롬 브라우저에서 최적화돼있습니다.',
				subTitle: '',
				status: 'warning',
			},
		};
	},
};
</script>

<style scoped>
.browser_warning {
	-webkit-text-stroke: 1px #000;
}
</style>
