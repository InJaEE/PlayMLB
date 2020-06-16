<script>
import { notification } from 'ant-design-vue';
import { CREATE_POST, EDIT_POST } from '@/store/module/post';
export default {
	data() {
		return {
			post: {
				title: '',
				contents: '',
			},
		};
	},
	methods: {
		async submitForm() {
			const titleLeng = this.post.title.length;
			const contentsLeng = this.post.contents.length;
			if (titleLeng > 50) {
				notification.open({
					message: '글 제목은 50자를 넘을 수 없습니다.',
					icon: <a-icon type="warning" style="color: red" />,
				});
				return;
			}
			if (contentsLeng > 3000000) {
				notification.open({
					message: '글 내용은 3000000자를 넘을 수 없습니다.',
					icon: <a-icon type="warning" style="color: red" />,
				});
				return;
			}
			if (!titleLeng) {
				alert('제목을 입력해주세요');
				return;
			}
			if (!contentsLeng) {
				alert('내용을 입력해주세요');
				return;
			}
			const submitData = {
				title: this.post.title,
				contents: this.post.contents,
			};

			if (this.$route.name === 'postEdit') {
				await this.$store.dispatch(EDIT_POST, {
					number: this.$route.params.postId,
					data: submitData,
				});
			} else {
				try {
					await this.$store.dispatch(CREATE_POST, submitData);
				} catch (err) {
					alert('글 작성에 실패하였습니다.');
					console.error(err);
				}
			}
			this.$router.push('/post');
		},
		changeContents(value) {
			this.post.contents = value;
		},
		titleChange(value) {
			this.post.title = value;
		},
	},
};
</script>
