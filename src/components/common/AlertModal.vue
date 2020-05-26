<template>
	<div>
		<a-modal v-model="modalInfo.visible" :footer="null">
			<a-result
				:status="modalInfo.status"
				:title="modalInfo.title"
				:sub-title="modalInfo.subTitle"
			>
				<template #extra>
					<a-button key="console" type="primary" @click="handleOk">
						확인
					</a-button>
				</template>
			</a-result>
		</a-modal>
	</div>
</template>
<script>
export default {
	props: ['modalInfo'],
	methods: {
		handleOk() {
			this.$emit('closeModal');
		},
	},
};
</script>
