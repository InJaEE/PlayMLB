<template>
	<div>
		<post-detail-form></post-detail-form>
		<div class="comment">
			<post-input-comment></post-input-comment>
			<div v-for="(item, index) in commentList" :key="index">
				<div v-if="currentComment(index)">
					<post-comment :comment="item"></post-comment>
				</div>
			</div>
			<a-pagination
				:current="currentCommentPage"
				:total="commentList.length"
				:pageSize="commentPageSize"
				@change="changePage"
				class="commentPagination"
			/>
		</div>
	</div>
</template>

<script>
import PostDetailForm from '@/components/post/detail/PostDetailForm.vue';
import PostInputComment from '@/components/post/detail/PostInputComment.vue';
import PostComment from '@/components/post/detail/PostComment.vue';
import { LOOKUP_ONE_POST } from '@/store/module/post';

export default {
	components: {
		PostDetailForm,
		PostInputComment,
		PostComment,
	},
	data() {
		return {
			comments: [],
			currentCommentPage: 1,
			commentPageSize: 5,
		};
	},
	computed: {
		commentList() {
			return this.comments;
		},
	},
	methods: {
		currentComment(index) {
			return (
				Math.floor(index / this.commentPageSize) + 1 === this.currentCommentPage
			);
		},
		changePage(i) {
			this.currentCommentPage = i;
		},
	},
	async created() {
		this.$store.commit('SET_LOADING', true);
		this.$store.commit('RESET_POST');
		try {
			await this.$store.dispatch(LOOKUP_ONE_POST, this.$route.params.postId);
			this.comments = this.$store.getters.getPost.comments;
		} catch (err) {
			alert('잘못된 접근입니다.');
			this.$router.push('/');
		}
		this.$store.commit('SET_LOADING', false);
	},
};
</script>

<style scoped>
.comment {
	width: 70%;
	margin: 0 auto;
}
.commentPagination {
	margin-bottom: 30px;
}
</style>
