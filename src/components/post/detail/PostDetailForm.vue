<template>
	<div>
		<a-card :bordered="true" class="card">
			<span slot="title" class="header">
				<div>
					{{ postData.title }}
				</div>
				<div class="post_header">
					<span class="header_left">
						<span>작성자: {{ postData.writer }}</span> |
						<span>작성일: {{ postData.createdAt }}</span>
					</span>
					<span class="header_right">
						<span>추천: {{ postData.countRecommend }}</span>
					</span>
				</div>
			</span>
			<p class="contents">
				{{ postData.contents }}
			</p>
			<div class="card_footer">
				<span class="recommend">
					<a-button
						@click="clickRecommend"
						shape="round"
						:class="{ btnRecommend: isRecommend }"
					>
						<a-icon
							type="fire"
							theme="twoTone"
							:twoToneColor="recommendColor"
						/>
						<span :class="{ textRecommend: isRecommend }">
							추천
						</span>
					</a-button>
				</span>
			</div>
		</a-card>
		<div class="form_footer">
			<span class="button_left">
				<a-button @click="moveToPostList"
					><a-icon type="left" />전체글</a-button
				>
			</span>
			<span class="button_right">
				<span
					v-if="postData.writer === this.$store.getters.getUserData.nickname"
				>
					<a-button @click="editPost">수정</a-button>
					<a-button type="danger" @click="deletePost">삭제</a-button>
				</span>
				<a-button type="primary" @click="moveNewPost">글쓰기</a-button>
			</span>
		</div>
	</div>
</template>

<script>
import moment from 'moment';
export default {
	data() {
		return {};
	},
	computed: {
		isRecommend() {
			return this.$store.getters.getPost.isRecommend;
		},
		recommendColor() {
			const redColor = '#ff4d4f';
			const grayColor = '#d9d9d9';
			if (this.isRecommend) {
				return redColor;
			} else {
				return grayColor;
			}
		},
		postData() {
			const post = this.$store.getters.getPost;
			return {
				title: post.title,
				contents: post.contents,
				writer: post.createdBy,
				views: post.views,
				recommend: post.recommend,
				countRecommend: post.countRecommend,
				createdAt: moment(post.createdAt).format('YY.MM.DD HH:mm'),
			};
		},
	},
	methods: {
		moveToPostList() {
			this.$router.push('/post');
		},
		async clickRecommend() {
			if (!this.$store.getters.isLogin) {
				alert('로그인을 해주세요.');
				return;
			}
			const data = {
				number: this.$route.params.postId,
				userId: this.$store.getters.getUserData.userId,
				postNumber: this.$route.params.postId,
			};
			await this.$store.dispatch('PRESS_RECOMMEND', data);
			this.$store.commit('TOGGLE_RECOMMEND');
		},
		editPost() {
			alert('준비중입니다.');
			//this.$router.push(`/post/${this.$route.params.postId}/edit`);
		},
		async deletePost() {
			if (confirm('정말로 삭제하시겠습니까?')) {
				await this.$store.dispatch('DELETE_POST', this.$route.params.postId);
				alert('삭제완료');
				this.$router.push('/post');
			}
		},
		moveNewPost() {
			this.$router.push('/newPost');
		},
		initPostData() {
			const post = this.$store.getters.getPost;
			this.postData = {
				title: post.title,
				contents: post.contents,
				writer: post.createdBy,
				views: post.views,
				recommend: post.recommend,
				countRecommend: post.countRecommend,
				createdAt: moment(post.createdAt).format('YY.MM.DD HH:mm'),
			};
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
.textRecommend {
	color: #ff4d4f;
}
.btnRecommend {
	border: 1px solid #ff4d4f;
}
</style>
