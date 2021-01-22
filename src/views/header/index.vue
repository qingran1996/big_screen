<template>
	<div class="toptitle">
		<dv-decoration-8 :color="['cornflowerblue', 'cornflowerblue']" class="topnav" />
		<!-- <dv-decoration-10 :color="['cornflowerblue', 'cornflowerblue']" style="width:14%;height:60px;" /> -->
		<dv-decoration-5 :color="['cornflowerblue', 'cornflowerblue']" :dur="2" :reverse="false" id="topline" />
		<!-- <dv-decoration-10 :color="['cornflowerblue', 'cornflowerblue']" style="width:14%;height:60px;transform: rotateY(180deg);" /> -->
		<dv-decoration-8 :color="['cornflowerblue', 'cornflowerblue']" :reverse="true" class="topnav" />
		<div class="center-title">
			<div class="decoration_6">永联精筑某某项目</div>
			<div>
				<dv-decoration-6 class="title-bototm" :reverse="true" :color="['#50e3c2', '#67a1e5']" style="text-align: center;display: inline-block;height: 10px;margin: 10px 0;" />
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		components: {},
		mounted() {},
		methods: {}
	};
</script>

<style scoped lang="scss">
	.toptitle {
		width: 100%;
		height: 210px;
		display: flex;
		color: white;
		margin: 0 auto;
		text-align: center;
	}
	.decoration_6 {
		display: inline-block;
	}
	.topnav {
		width: 20%;
		height: 60px;
		display: inline-block;
	}

	.center-title {
		position: absolute;
		font-size: 30px;
		font-weight: bold;
		left: 50%;
		top: 15px;
		transform: translateX(-50%);
	}

	#topline {
		width: 40%;
		height: 150px;
		text-align: center;
		margin: 0 auto;
	}
</style>
