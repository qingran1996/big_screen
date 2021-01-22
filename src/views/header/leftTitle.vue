<template>
	<div class="left_title">
		<el-row :gutter="24" style="display: flex;">
			<el-col :span="item.part" v-for="(item,index) in showText" :key="index">
				<div class="grid-content bg-purple1">
					<!-- <div class="horn">{{item.name}}</div> -->
					<dv-border-box-10 :color="['cornflowerblue', 'blue']"><span>{{item.name}}</span></dv-border-box-10>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showText: [{
					name: '基础管理',
					url: '',
					part: 5
				}, {
					name: '相关方管理',
					url: '',
					part: 5
				}, {
					name: '子系统管理',
					url: '',
					part: 5
				}, {
					name: '安全质量管理',
					url: '',
					part: 5
				}, {
					name: '智能监控管理',
					url: '',
					part: 5
				}]
			};
		},
		components: {},
		mounted() {},
		methods: {}
	};
</script>

<style scoped>
	.left_title {
		width: 39%;
		height: 120px;
		align-items: center;
		vertical-align: middle;
		left: 1%;
		top: 5%;
		position: absolute;
		display: inline-block;
		/* // transform: skewX(45deg); */
	}

	.left_title>>>.border-box-content {
		/* transform: skewX(-45deg); */
	}
	.grid-content {
		/* transform: skewX(45deg); */
		border-radius: 10px;
		cursor: pointer;
		align-items: center;
		vertical-align: middle;
		text-align: center;
		margin: 1.75rem 0;
		height: 3.5rem;
		font-size: 1.2rem;
		line-height: 3.5rem;
	}

	.horn {
		
		background-image: -webkit-linear-gradient(left,blue,#66ffff 10%,cornflowerblue 20%,lightblue 30%, cornflowerblue 40%, #00FFFF 50%,lightblue 60%,cornflowerblue 70%,cornflowerblue 80%,#66FFFF 90%,blue 100%);
		font-size: 20px;
		font-family: "arial black";
		-webkit-text-fill-color: transparent;/* 字体设置成透明色 */
		-webkit-background-clip: text;/* 裁剪背景，使文字作为裁剪区域向外裁剪 */
		-webkit-background-size: 200% 100%; 
		-webkit-animation: masked-animation 4s linear infinite;
	}
	@keyframes masked-animation {
	0% {
	background-position: 0  0;
	}
	100% {
	background-position: -100%  0;
	}
	}
	.grid-content span {
		background-image: -webkit-linear-gradient(left,blue,#66ffff 10%,cornflowerblue 20%,lightblue 30%, cornflowerblue 40%, #00FFFF 50%,lightblue 60%,cornflowerblue 70%,cornflowerblue 80%,#66FFFF 90%,blue 100%);
		font-size: 1.2rem;
		font-family: "arial black";
		-webkit-text-fill-color: transparent;/* 字体设置成透明色 */
		-webkit-background-clip: text;/* 裁剪背景，使文字作为裁剪区域向外裁剪 */
		-webkit-background-size: 200% 100%; 
		-webkit-animation: masked-animation 4s linear infinite;
	}

	.grid-content:hover {
		animation: clipMe 1s linear infinite;
	}

	@keyframes clipMe {
		0% {
			box-shadow: 0 0 40px 0 cornflowerblue;
		}

		25% {
			box-shadow: 0 0 30px 0 cornflowerblue;
		}

		50% {
			box-shadow: 0 0 20px 0 cornflowerblue;
		}

		75% {
			box-shadow: 0 0 30px 0 cornflowerblue;
		}

		100% {
			box-shadow: 0 0 40px 0 cornflowerblue;
		}
	}
</style>
