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
};
</script>

<style scoped>
.comment {
	width: 70%;
	margin: 0 auto;
}
</style>
