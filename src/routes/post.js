export default [
	{
		path: '/post',
		name: 'post',
		component: () => import('@/views/post/PostView.vue'),
	},
	{
		path: '/post/:postId',
		component: () => import('@/views/post/PostDetailView.vue'),
	},
	{
		path: '/newPost',
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
