<template>
	<div>
		<a-card title="애국가" :headStyle="head" :bordered="true" class="card">
			<p class="contents">
				애국가의 자취는 조선 후기 개화기와 갑오개혁 직후까지 올라간다. 1896년
				당시 독립문 정초식에서 배재학당 학생들에 의해 그 유명한 스코틀랜드 민요
				올드 랭 사인의 멜로디로 불린 작사 미상인 애국가가 최초의 애국가로
				여겨진다. 여기서 후렴 "무궁화 삼천리 화려강산 죠션 사람 죠션으로 길이
				보죤하세" 라는 가사가 지금의 애국가 가사에서도 맥을 이어
				변형(조선→대한)되어 쓰이고 있는 데서 확인할 수 있다. 이 때는 한 해에
				수십개의 애국가가 쏟아져나왔다. 대한제국의 애국가는 1898년 가사가
				기초되어 이때는 God Save the King에 맞춰 불렀다. 이후 1902년 완성한
				에케르트 작곡의 "대한제국 애국가"가 공식적으로 대한제국의 애국가가
				되었다. 이후 공식적으로는 1907년 순종 황제 즉위식에서 마지막으로
				연주되었고, 1909년에 이르러서는 일제의 애국 창가(唱歌)에 대한 단속으로
				인해 7년만에 금지곡이 된 비운의 국가이다.
			</p>
			<div class="card_footer">
				<span class="recommend">
					<a-button>추천</a-button>
				</span>
			</div>
		</a-card>
		<div class="form_footer">
			<span class="button_left">
				<a-button>전체글</a-button>
			</span>
			<span class="button_right">
				<span>
					<a-button>수정</a-button>
					<a-button type="danger">삭제</a-button>
				</span>
				<a-button type="primary">글쓰기</a-button>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			head: {
				fontWeight: 'bold',
			},
		};
	},
};
</script>

<style scoped>
.card {
	width: 100%;
	margin-top: 50px;
	margin-bottom: 20px;
}
.contents {
	margin-top: 10px;
	margin-bottom: 50px;
}
.form_footer {
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 30px;
	border-bottom: 1px solid #e8e8e8;
}
.button_right button {
	margin: 0 2px;
}
</style>
