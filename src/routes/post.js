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
		component: () => import('@/components/post/PostWrite.vue'),
	},
	{
		path: '/post/:postId/edit',
		component: () => import('@/components/post/PostEdit.vue'),
	},
];
