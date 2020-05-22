<template>
	<div>
		<a-input-search
			placeholder="input search text"
			size="large"
			@search="onSearch"
		>
			<a-button slot="enterButton">
				등록
			</a-button>
		</a-input-search>
	</div>
</template>

<script>
export default {
	methods: {
		onSearch() {
			alert('HELLO');
		},
	},
};
</script>
