<template>
	<div>
		<section class="contents about_wrapper">
			<a-card title="Backend" class="card">
				<div v-for="item in backend" :key="item.title">
					<a :href="item.url" target="_blank">
						<a-card-grid>
							<img
								:src="require(`@/assets/stack/${item.img}`)"
								:title="item.title"
								:alt="item.title"
							/>
						</a-card-grid>
					</a>
				</div>
			</a-card>
			<a-card title="Frontend">
				<div v-for="item in frontend" :key="item.title">
					<a :href="item.url" target="_blank">
						<a-card-grid>
							<img
								:src="require(`@/assets/stack/${item.img}`)"
								:title="item.title"
								:alt="item.title"
							/>
						</a-card-grid>
					</a>
				</div>
			</a-card>
		</section>
		<div class="show_code">
			<span class="value_area">
				<a href="https://github.com/InJaEE/PlayMLB" target="_blank">
					<a-icon type="github" theme="filled" />
					<strong>
						소스코드 보기
					</strong>
				</a>
			</span>
		</div>
	</div>
</template>

<script>
import { backend, frontend } from '@/data/stack.js';
export default {
	data() {
		return {
			backend,
			frontend,
		};
	},
	created() {
		this.$store.commit('SET_LOADING', true);
		setTimeout(() => {
			this.$store.commit('SET_LOADING', false);
		}, 500);
	},
};
</script>

<style scoped>
.about_wrapper {
	margin-top: 100px;
}
img {
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 50px;
}
.show_code {
	margin: 50px 0;
}
.value_area {
	font-size: 25px;
}
a {
	color: black;
	text-decoration: none;
}
</style>
