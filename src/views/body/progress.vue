<template>
	<div class="progress">
		<dv-decoration-9 :style="{width: prowidth,height: proheight,margin: 'auto 20px'}">
			<div class="lefttitle">
				<div class="leftnum">98</div>
				<div class="rightnum">已施工(天)</div>
			</div>
		</dv-decoration-9>
		<div class="progress_out">
			<div class="progress_in" :style="{width:progress_width+'%'}"></div>
			<div class="progress_out1" v-for="(item,index) in progress_data" :key="index" :style="{left: item.progress}">
				<div class="textup" :style="{left: item.textprogress}">{{item.name}}</div>
				<div class="textdown" :style="{left: item.textprogress}">{{item.time}}</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				progress_width: 26,
				prowidth: '',
				proheight: '',
				progress_data: [{
					name: '项目开工',
					progress: 'calc(20% - 40px)',
					textprogress: '20%',
					time: '2020-03-01'
				}, {
					name: '土方回镇',
					progress: 'calc(40% - 40px)',
					textprogress: '40%',
					time: '2020-03-01'
				}, {
					name: '主体封顶',
					progress: 'calc(60% - 40px)',
					textprogress: '60%',
					time: '2020-03-01'
				}, {
					name: '项目竣工',
					progress: 'calc(80% - 40px)',
					textprogress: '80%',
					time: '2020-03-01'
				}]
			};
		},
		components: {},
		mounted() {
			// console.log(document.querySelector('.progress').clientWidth)
			this.prowidth = document.querySelector('.progress').clientWidth * 0.4 + 'px'
			this.proheight = document.querySelector('.progress').clientHeight * 0.8 + 'px'
		},
		methods: {}
	};
</script>

<style scoped>
	.progress {
		height: 100%;
		display: flex;
		margin: auto 5%;
	}

	.progress_out {
		display: inline-block;
		margin: auto 20px;
		width: 100%;
		height: 10px;
		border-radius: 5px;
		background-color: rgba(1, 49, 65, 1);
		position: relative;
		top: 0;
		left: 0;
	}

	.progress_in {
		display: inline-block;
		height: 10px;
		border-radius: 5px;
		background: rgba(2, 227, 252, 1);
		background-position: center right;
		position: absolute;
		top: 0;
		left: 0;
	}

	.lefttitle {
		text-align: center;
	}

	.leftnum {
		text-transform: uppercase;
		font-family: "comic sans ms";
		text-shadow: 0 0 20px skyblue, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
		color: skyblue;
		font-size: 40px;
		animation: clipMe 1s linear infinite;
	}

	@keyframes clipMe {
		0% {
			text-shadow: 0 0 40px skyblue, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
		}

		25% {
			text-shadow: 0 0 30px skyblue, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
		}

		50% {
			text-shadow: 0 0 20px skyblue, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
		}

		75% {
			text-shadow: 0 0 30px skyblue, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
		}

		100% {
			text-shadow: 0 0 40px skyblue, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
		}
	}

	.rightnum {
		font-size: 20px;
		color: cornflowerblue;
	}

	.progress_out1 {
		display: inline-block;
		height: 15px;
		width: 15px;
		border-radius: 50%;
		border: 2px solid #6495ED;
		background: white;
		background-position: center right;
		position: relative;
		top: -5px;

	}

	.leftshow1 {
		left: calc(20% - 15px);
	}

	.leftshow2 {
		left: calc(40% - 15px);
	}

	.leftshow3 {
		left: calc(60% - 15px);
	}

	.leftshow4 {
		left: calc(80% - 15px);
	}

	.textup,
	.textdown {
		position: absolute;
	}

	.textup {
		top: -50px;
		width: 200px;
	}

	.textdown {
		top: 50px;
		width: 200px;
	}
</style>
