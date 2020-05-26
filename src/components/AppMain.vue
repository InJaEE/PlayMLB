<template>
	<div>
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

	methods: {
		closeAlertModal() {
			this.alertModalStatus.visible = false;
		},
	},
};
</script>

<style></style>
