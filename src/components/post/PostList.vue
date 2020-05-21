<template>
	<div>
		<a-table :columns="columns" :data-source="posts"></a-table>
	</div>
</template>

<script>
const columns = [
	{
		title: '번호',
		dataIndex: 'key',
		width: '10%',
		key: 'number',
	},
	{
		title: '제목',
		dataIndex: 'title',
		width: '40%',
		key: 'title',
		//scopedSlots: { customRender: 'title' },
	},
	{
		title: '조회수',
		dataIndex: 'views',
		width: '10%',
		key: 'views',
		//scopedSlots: { customRender: 'view' },
	},
	{
		title: '글쓴이',
		dataIndex: 'writer',
		width: '10%',
		key: 'writer',
		//scopedSlots: { customRender: 'writer' },
	},
	{
		title: '생성일',
		dataIndex: 'created',
		width: '10%',
		key: 'created',
		//scopedSlots: { customRender: 'created' },
	},
	{
		title: '추천',
		dataIndex: 'recommend',
		width: '10%',
		key: 'recommend',
		//scopedSlots: { customRender: 'recommend' },
	},
];
export default {
	data() {
		return {
			columns,
			data: [
				{ title: 'TITLE', created: '2', key: '1' },
				{ title: '1', created: '2', recommend: '30', key: '2' },
			],
			posts: [],
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
					created: v.createdAt,
					recommend: v.recommend,
				};
				data.push(obj);
			});
			this.posts = data;
		},
	},
	async created() {
		await this.$store.dispatch('LOOKUP_POSTS');
		this.setPosts(this.$store.getters.getPosts);
	},
};
</script>

<style></style>
