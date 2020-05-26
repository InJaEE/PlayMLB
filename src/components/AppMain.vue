<template>
	<div>
		<h1 v-if="isNotChrome">
			이 사이트는 크롬 브라우저에서 최적화돼있습니다.
		</h1>
		<img class="contents" src="@/assets/scherzer.jpg" alt="" />
		<alert-modal
			:modalInfo="alertModalStatus"
			@closeModal="closeAlertModal"
		></alert-modal>
	</div>
</template>

<script>
import AlertModal from '@/components/common/AlertModal.vue';
export default {
	components: {
		AlertModal,
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
	methods: {
		closeAlertModal() {
			this.alertModalStatus.visible = false;
		},
	},
	created() {
		if (navigator.userAgent.indexOf('Chrome') === -1) {
			this.alertModalStatus.visible = true;
			this.isNotChrome = true;
		}
	},
};
</script>

<style></style>
