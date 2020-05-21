<template>
	<div>
		<a-table
			:columns="columns"
			:data-source="posts"
			:loding="this.$store.getters.getLoding"
			:expandRowByClick="true"
		></a-table>
	</div>
</template>

<script>
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
		scopedSlots: { customRender: '<a href="/test></a>' },
	},
	{
		title: '조회수',
		dataIndex: 'views',
		width: '10%',
		key: 'views',
		align: 'center',
		//scopedSlots: { customRender: 'view' },
	},
	{
		title: '글쓴이',
		dataIndex: 'writer',
		width: '10%',
		key: 'writer',
		align: 'center',
		//scopedSlots: { customRender: 'writer' },
	},
	{
		title: '생성일',
		dataIndex: 'created',
		width: '10%',
		key: 'created',
		align: 'center',
		//scopedSlots: { customRender: 'created' },
	},
	{
		title: '추천',
		dataIndex: 'recommend',
		width: '10%',
		key: 'recommend',
		align: 'center',
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
					title: `<a href="/test">${v.title}</a>`,
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
