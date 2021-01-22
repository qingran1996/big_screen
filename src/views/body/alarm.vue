<template>
	<div class="alarm">
		<div class="alarm_top" :style="{height: topheight}">
			123
		</div>
		<div class="alarm_body" :style="{height: bottomheight}">456</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				topheight: '',
				bottomheight: ''
			};
		},
		components: {},
		mounted() {
			console.log()
			this.topheight = document.querySelector('.alarm').clientHeight * 0.4 + 'px'
			this.bottomheight = document.querySelector('.alarm').clientHeight * 0.6 + 'px'
		},
		methods: {}
	};
</script>

<style scoped>
	.alarm {
		height: 100%;
		border-radius: 10px;
		/* background: url(../../assets/233.jpg) no-repeat center/cover;
		border-radius: 10px; */
	}
	.alarm_top {
		background-color: aqua;
		border-radius: 10px;
	}
	.alarm_body {
		background-color: red;
		border-radius: 10px;
	}
</style>
