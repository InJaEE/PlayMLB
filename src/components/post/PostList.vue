<template>
	<div>
		<a-table
			:columns="columns"
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
const columns = [
	{
		title: '번호',
		dataIndex: 'key',
		width: '10%',
		key: 'number',
		align: 'center',
	},
	{
		title: '제목',
		dataIndex: 'title',
		width: '40%',
		key: 'title',
		align: 'center',
	},
	{
		title: '조회수',
		dataIndex: 'views',
		width: '10%',
		key: 'views',
		align: 'center',
	},
	{
		title: '글쓴이',
		dataIndex: 'writer',
		width: '10%',
		key: 'writer',
		align: 'center',
	},
	{
		title: '작성일',
		dataIndex: 'created',
		width: '10%',
		key: 'created',
		align: 'center',
	},
	{
		title: '추천',
		dataIndex: 'recommend',
		width: '10%',
		key: 'recommend',
		align: 'center',
	},
];
export default {
	data() {
		return {
			columns,
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
					views: v.views,
					writer: v.writer,
					created: formatFullDate(v.createdAt),
					recommend: v.recommend,
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
					click() {
						vm.$router.push(`/post/${record.key}`);
					},
				},
			};
		},
		write() {
			this.$router.push('/newPost');
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
