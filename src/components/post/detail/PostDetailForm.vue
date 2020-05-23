<template>
	<div>
		<a-card :bordered="true" class="card">
			<span slot="title" class="header">
				<div>
					{{ formData.title }}
				</div>
				<div class="post_header">
					<span class="header_left">
						<span>작성자: {{ formData.writer }}</span> |
						<span>작성일: {{ formData.createdAt }}</span>
					</span>
					<span class="header_right">
						<span>조회수: {{ formData.views }} </span>
					</span>
				</div>
			</span>
			<p class="contents">
				{{ formData.contents }}
			</p>
			<div class="card_footer">
				<span class="recommend">
					<a-button @click="clickRecommend">
						<a-icon
							type="fire"
							theme="twoTone"
							:twoToneColor="recommendColor"
						/>추천
					</a-button>
				</span>
			</div>
		</a-card>
		<div class="form_footer">
			<span class="button_left">
				<a-button @click="moveToPostList">전체글</a-button>
			</span>
			<span class="button_right">
				<span>
					<a-button>수정</a-button>
					<a-button type="danger">삭제</a-button>
				</span>
				<a-button type="primary">글쓰기</a-button>
			</span>
		</div>
	</div>
</template>

<script>
import moment from 'moment';
export default {
	computed: {
		formData() {
			const post = this.$store.getters.getPost;
			return {
				title: post.title,
				contents: post.contents,
				writer: post.createdBy,
				views: post.views,
				recommend: post.recommend,
				createdAt: moment(post.createdAt).format('YY.MM.DD HH:mm'),
			};
		},
		recommendColor() {
			return this.$store.getters.getPost.isRecommend ? '#ff4d4f' : '#d9d9d9';
		},
	},
	methods: {
		moveToPostList() {
			this.$router.push('/post');
		},
		async clickRecommend() {
			const data = {
				number: this.$route.params.postId,
				userId: this.$store.getters.getUserData.userId,
			};
			await this.$store.dispatch('PRESS_RECOMMEND', data);
			this.$store.commit('TOGGLE_RECOMMEND');

			// this.isRecommend = !this.isRecommend;
		},
	},
};
</script>

<style scoped>
.card {
	width: 100%;
	margin-top: 50px;
	margin-bottom: 20px;
	padding: 0 30px;
}
.header {
	text-align: center;
}
.post_header {
	font-size: 12px;
}
.header_left {
	float: left;
}
.header_right {
	float: right;
}
.contents {
	text-align: left;
	margin-top: 10px;
	margin-bottom: 50px;
}
.form_footer {
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 30px;
	border-bottom: 1px solid #e8e8e8;
}
.button_right button {
	margin: 0 2px;
}
</style>
