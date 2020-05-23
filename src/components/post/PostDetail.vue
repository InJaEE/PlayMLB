<template>
	<div>
		<post-detail-form></post-detail-form>
		<div class="comment">
			<post-input-comment></post-input-comment>
			<post-comment></post-comment>
		</div>
	</div>
</template>

<script>
import PostDetailForm from '@/components/post/detail/PostDetailForm.vue';
import PostInputComment from '@/components/post/detail/PostInputComment.vue';
import PostComment from '@/components/post/detail/PostComment.vue';

export default {
	components: {
		PostDetailForm,
		PostInputComment,
		PostComment,
	},
	methods: {},
	computed: {
		commentData() {
			return 0;
		},
	},
	async created() {
		this.$store.commit('SET_LOADING', true);
		this.$store.commit('RESET_POST');
		await this.$store.dispatch('LOOKUP_ONE_POST', this.$route.params.postId);
		this.$store.commit('SET_LOADING', false);
	},
};
</script>

<style scoped>
.comment {
	width: 70%;
	margin: 0 auto;
}
</style>
