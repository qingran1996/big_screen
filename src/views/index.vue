<template>
	<div class="index">

		<dv-full-screen-container class="fullscreen">
			<!-- <video class="bgvid" id="bgvid" autoplay muted loop>
			 
			<source src="../assets/1.mp4" type="video/mp4">
			 
			</video> -->
			<!-- 界面顶部 -->
			<Headershow></Headershow>
			<!-- 左侧菜单 -->
			<leftshow></leftshow>
			<!-- 右侧天气时间 -->
			<rightshow></rightshow>
			<!-- 界面主体 -->
			<Bodyshow></Bodyshow>

		</dv-full-screen-container>
	</div>
</template>

<script>
	import Headershow from './header/index.vue'
	import Bodyshow from './body/index.vue'
	import leftshow from './header/leftTitle.vue'
	import rightshow from './header/rightTitle.vue'
	export default {
		name: "index",
		components: {
			Headershow,
			Bodyshow,
			leftshow,
			rightshow
		},
		data() {
			return {
				height1: '',
				height2: '',
				isshow: false
			};
		},
		computed: {},
		created() {},
		mounted() {

		},
		methods: {}
	}
</script>

<style scoped>
	.index {
		width: 100%;
		height: 100%;
		text-align: center;
	}

	

	.mainbody>>>.dv-border-box-11 {
		color: white;
		padding: 55px 15px 15px 15px;
		-webkit-box-sizing: border-box;
		border-radius: 10px;
		text-align: left;
		width: auto;
		height: auto;
		justify-content: center;
		align-items: center;
		font-weight: 700;
	}

	.fullscreen {
		background: url(../assets/back.jpg) no-repeat center/cover;
		/* background:url("http://cdn.moji.com/websrc/video/video621.mp4") no-repeat center0px; */
	}

	video#bgvid {

		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height:auto;
		z-index: -100;
		background-size: cover;

	}
</style>
