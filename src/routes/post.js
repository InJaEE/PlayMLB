export default [
	{
		path: '/post',
		name: 'post',
		component: () => import('@/views/post/PostView.vue'),
	},
	{
		path: '/post/view/:postId',
		component: () => import('@/views/post/PostDetailView.vue'),
	},
	{
		path: '/post/new',
		meta: {
			auth: true,
		},
		component: () => import('@/views/post/PostWrite.vue'),
	},
	{
		path: '/post/:postId/edit',
		component: () => import('@/views/post/PostEdit.vue'),
	},
];
