<template>
	<div class="contents">
		<a-carousel arrows :autoplay="true">
			<div
				slot="prevArrow"
				class="custom-slick-arrow"
				style="left: 10px;zIndex: 1"
			>
				<a-icon type="left-circle" />
			</div>
			<div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
				<a-icon type="right-circle" />
			</div>
			<template v-for="(item, index) in imgs">
				<img
					:src="require(`@/assets/slider/${item}.jpg`)"
					:key="index"
					:alt="item"
				/>
			</template>
		</a-carousel>
	</div>
</template>

<script>
export default {
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
.ant-carousel >>> .slick-slide {
	text-align: center;
	/* height: 160px; */
	line-height: 160px;
	background: #364d79;
	overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
	width: 25px;
	height: 25px;
	font-size: 25px;
	color: #fff;
	background-color: rgba(31, 45, 61, 0.11);
	opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
	display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
	opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
	color: #fff;
}
</style>
