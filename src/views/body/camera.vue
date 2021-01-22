<template>
	<div class="camera">
		<div class="cameralist" :style="{height: listheight,lineHeight: listheight}" v-for="(item,index) in cameraData" :key="index">
			<div class="leftgrid">
				<i class="el-icon-video-camera-solid" style="font-size: 24px;"></i>
				<span style="margin-left: 10px;font-family: '新宋体'">{{item.name}}</span>
			</div>
			<div class="rightgrid">
				<i class="el-icon-video-play" style="margin-right: 20px;font-size: 24px;"></i>
				<i class="el-icon-s-promotion" style="color: orange;margin-right: 10px;font-size: 24px;"></i>
			</div>
		</div>
		<!-- <el-row v-for="(item,index) in cameraData" :key="index">
			<el-col :span="24">
				<div class="grid-content">
					<div class="leftgrid">
						<i class="el-icon-video-camera-solid" style="font-size: 1.5rem;"></i>
						<span style="font-size: 1.2rem;margin-left: 10px;font-family: '新宋体'">{{item.name}}</span>
					</div>
					<div class="rightgrid">
						<i class="el-icon-video-play" style="font-size: 1.5rem;margin-right: 20px;"></i>
						<i class="el-icon-s-promotion" style="font-size: 1.5rem;color: orange;margin-right: 10px;"></i>
					</div>
				</div>
			</el-col>
		</el-row> -->
		<!-- <dv-scroll-board :config="config" style="width:100%;height:100%;" /> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				listheight: '',
				config: {
					waitTime: 1000000,
					data: [
						['行1列1', '行1列2', '行1列3'],
						['行2列1', '行2列2', '行2列3'],
						['行3列1', '行3列2', '行3列3'],
						['行4列1', '行4列2', '行4列3'],
						['行5列1', '行5列2', '行5列3'],
					]
				},
				cameraData: [{
					name: '门卫1监控西',
					progress: 70,
					text: '200万',
					classname: 'showprogress1'
				}, {
					name: '门卫2监控西',
					progress: 40,
					text: '200万',
					classname: 'showprogress2'
				}, {
					name: '门卫3监控西',
					progress: 20,
					text: '200万',
					classname: 'showprogress3'
				}, {
					name: '门卫4监控西',
					progress: 60,
					text: '200万',
					classname: 'showprogress4'
				}, {
					name: '门卫5监控西',
					progress: 60,
					text: '200万',
					classname: 'showprogress4'
				}]
			};
		},
		components: {},
		mounted() {
			this.listheight = document.querySelector('.camera').clientHeight * 0.2 - 10 + 'px'
		},
		methods: {}
	};
</script>

<style scoped>
	.camera {
		width: 100%;
		height: 100%;
		display: grid;
	}

	.cameralist {
		font-size: 20px;
		margin: 5px 0;
		background-color: rgb(3, 36, 117);
		padding: 0 10px;
		border-radius: 5px;
	}

	.grid-content {
		background-color: rgb(3, 36, 117);
		padding: 0 10px;
		border-radius: 5px;
	}

	.leftgrid {
		text-align: left;
		display: inline-block;
	}

	.rightgrid {
		text-align: right;
		display: inline-block;
		position: absolute;
		right: 0;
	}

	.rightgrid i {
		cursor: pointer;
	}
</style>
