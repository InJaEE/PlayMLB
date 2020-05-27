<template>
	<a-comment>
		<a slot="author"><a-icon type="user" /> {{ comment.createdBy.nickname }}</a>
		<p slot="content" style="text-align:left">
			{{ comment.contents }}
		</p>
		<a-tooltip
			slot="datetime"
			:title="moment(comment.createdAt).format('YYYY-MM-DD HH:mm:ss')"
		>
			<span>{{ moment(comment.createdAt).fromNow() }}</span>
		</a-tooltip>
	</a-comment>
</template>
<script>
import moment from 'moment';
export default {
	props: {
		comment: Object,
	},
	data() {
		return {
			moment,
		};
	},
	methods: {},
};
</script>
