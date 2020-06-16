<template>
	<div>
		<a-table
			:columns="Columns"
			:data-source="posts"
			:customRow="customRow"
			:pagination="pagination"
		>
		</a-table>
		<a-button type="primary" @click="write" class="write_button"
			>글쓰기</a-button
		>
	</div>
</template>

<script>
import { formatFullDate } from '@/utils/filters';
import Columns from '@/data/postHeader';
import { LOOKUP_POSTS } from '@/store/module/post';

export default {
	data() {
		return {
			Columns,
			posts: [],
			pagination: {
				position: 'top',
			},
		};
	},
	methods: {
		setPosts(posts) {
			const data = [];
			posts.forEach(v => {
				const obj = {
					key: v.number,
					title: v.title,
					writer: v.createdBy.nickname,
					created: formatFullDate(v.createdAt),
					recommend: v.recommend.length,
				};
				data.push(obj);
			});
			data.sort((a, b) => {
				return b.key - a.key;
			});
			this.posts = data;
		},
		customRow(record) {
			const vm = this;
			return {
				on: {
					async click() {
						if (record.key === '공지사항') {
							return;
						}
						vm.$router.push(`/post/view/${record.key}`);
					},
				},
			};
		},
		write() {
			this.$router.push('/post/new');
		},
	},
	async created() {
		this.$store.commit('SET_LOADING', true);
		try {
			await this.$store.dispatch(LOOKUP_POSTS);
			this.setPosts(this.$store.getters.getPosts);
		} catch (err) {
			this.$router.push('/error');
			alert('서버와의 통신 과정에서 오류가 발생하였습니다.');
			console.error(err);
		} finally {
			this.$store.commit('SET_LOADING', false);
		}
	},
};
</script>

<style scoped>
.write_button {
	margin-top: 50px;
}
</style>
