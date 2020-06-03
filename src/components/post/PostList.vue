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
			// this.posts.unshift({
			// 	key: '공지사항',
			// 	title: 'MLB에 관련한 내용만 작성해주세요.',
			// 	writer: '관리자',
			// 	created: '1999.12.20',
			// 	recommend: 99,
			// });
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
		await this.$store.dispatch('LOOKUP_POSTS');
		this.setPosts(this.$store.getters.getPosts);
		this.$store.commit('SET_LOADING', false);
	},
};
</script>

<style scoped>
.write_button {
	margin-top: 50px;
}
</style>
