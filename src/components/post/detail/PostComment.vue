<template>
	<a-comment>
		<a slot="author"><a-icon type="user" /> Han Solo</a>
		<p slot="content" style="text-align:left">
			We supply a series of design principles, practical patterns and high
			quality design resources (Sketch and Axure), to help people create their
			product prototypes beautifully and efficiently.
		</p>
		<a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
			<span>{{ moment().fromNow() }}</span>
		</a-tooltip>
	</a-comment>
</template>
<script>
import moment from 'moment';
export default {
	data() {
		return {
			likes: 0,
			dislikes: 0,
			action: null,
			moment,
		};
	},
	methods: {
		like() {
			this.likes = 1;
			this.dislikes = 0;
			this.action = 'liked';
		},
		dislike() {
			this.likes = 0;
			this.dislikes = 1;
			this.action = 'disliked';
		},
	},
};
</script>
