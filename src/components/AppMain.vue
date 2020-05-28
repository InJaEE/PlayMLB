<template>
	<div class="contents">
		<vue-tiny-slider v-bind="tinySliderOptions">
			<template v-for="(item, index) in imgs">
				<img :src="require(`@/assets/slider/${item}.jpg`)" :key="index" />
				<!-- <img src="@/assets/slider/1.jpg" alt="" /> -->
			</template>
		</vue-tiny-slider>
	</div>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider';
export default {
	components: {
		VueTinySlider,
	},
	data() {
		return {
			tinySliderOptions: {
				mouseDrag: true,
				loop: true,
				items: 1,
				swipeAngle: 45,
				autoplay: true,
				autoplayTimeout: 2000,
				autoplayButtonOutput: false,
				nav: false,
				slideBy: 1,
				controls: false,
			},
			imgs: [],
		};
	},
	created() {
		const count = 5;
		const arr = [];
		for (let i = count; i > 0; i--) {
			arr.push(i);
		}
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		this.imgs = arr;
	},
};
</script>

<style scoped>
.contents img {
	max-height: 800px;
	border-radius: 20px 20px;
}
.pageBtn {
	border: 0;
	padding: 0;
	font-size: 30px;
	position: absolute;
	top: 50%;
	margin-top: -18px;
	z-index: 1;
	background: transparent;
}
</style>
