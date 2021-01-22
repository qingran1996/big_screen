<template>
	<div class="mainbody">
		<dv-loading v-if="!isshow" style="color: #F9FAFC;position: absolute;height: auto;top: 50%;z-index: 9999;">Loading...</dv-loading>
		<el-row v-if="isshow" :gutter="20" style="padding: 0 20px;">
			<el-col :xs="6" :sm="7" :md="6" :lg="6" :xl="6">
				<dv-border-box-11 title="基本信息" :style="{height: height1}">
					<div class="info" :style="{height: height3}"><aboutInfo></aboutInfo></div>
				</dv-border-box-11>
				<dv-border-box-11 title="摄像列表" :style="{height: height1}">
					<div class="info" :style="{height: height3}"><camera></camera></div>
				</dv-border-box-11>
			</el-col>
			<el-col :xs="12" :sm="10" :md="12" :lg="12" :xl="12">

				<dv-border-box-11 title="BIM平面图" :style="{height: height2}">
					<div class="info" :style="{height: height4}"><BIM></BIM></div>
				</dv-border-box-11>
			</el-col>
			<el-col :xs="6" :sm="7" :md="6" :lg="6" :xl="6">
				<dv-border-box-11 title="人员信息" :style="{height: height1}">
					<div class="info" :style="{height: height3}"><person></person></div>
				</dv-border-box-11>
				<dv-border-box-11 title="财务信息" :style="{height: height1}">
					<div class="info" :style="{height: height3}"><finance></finance></div>
				</dv-border-box-11>
			</el-col>
		</el-row>

		<el-row v-if="isshow" :gutter="20" style="padding: 0 20px;">
			<el-col el-col :xs="6" :sm="7" :md="6" :lg="6" :xl="6">
				<dv-border-box-11 title="设备列表" :style="{height: height1}">
					<div class="info" :style="{height: height3}"><device></device></div>
				</dv-border-box-11>
			</el-col>
			<el-col :xs="12" :sm="10" :md="12" :lg="12" :xl="12">
				<dv-border-box-11 title="项目进度" :style="{height: height1}">
					<div class="info" :style="{height: height3}"><Progress></Progress></div>
				</dv-border-box-11>
			</el-col>
			<el-col el-col :xs="6" :sm="7" :md="6" :lg="6" :xl="6">
				<dv-border-box-11 title="告警信息" :style="{height: height1}">
					<div class="info" :style="{height: height3}"><alarm></alarm></div>
				</dv-border-box-11>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import Progress from './progress.vue'
	import BIM from './BIM.vue'
	import finance from './finance.vue'
	import person from  './person.vue'
	import camera from './camera.vue'
	import device from './device.vue'
	import alarm from './alarm.vue'
	import aboutInfo from './about_info.vue'
	export default {
		data() {
			return {
				height1: '',
				height2: '',
				height3: '',
				height4: '',
				isshow: false
			};
		},
		components: {
			Progress,
			BIM,
			finance,
			person,
			camera,
			alarm,
			device,
			aboutInfo
		},
		mounted() {
			// console.log(document.querySelector('.mainbody').clientHeight)
			// document.querySelector('.mainbody').style.display = 'none'
			setTimeout(() => {
				// console.log(document.querySelector('#dv-full-screen-container').clientHeight)
				this.height1 = (document.querySelector('#dv-full-screen-container').clientHeight - 210) / 3 + 'px'
				this.height2 = (document.querySelector('#dv-full-screen-container').clientHeight - 210) / 3 * 2 + 'px'
				this.height3 = '100%'
				this.height4 = '100%'
				document.body.getElementsByTagName('animate')[0].setAttribute('repeatCount', 'none')
				document.body.getElementsByTagName('animate')[1].setAttribute('repeatCount', 'none')
				setTimeout(() => {
					this.isshow = true
				}, 1500)
			}, 500)
		},
		methods: {}
	};
</script>

<style scoped lang="scss">
	.el-row {
		// margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}
	.mainbody {
		height: calc(100% - 210px);
		margin-top: - 10px;
		-webkit-box-flex: 1;
		    -ms-flex: 1;
		    flex: 1;
		    -ms-flex-direction: column;
		    flex-direction: column;
	}
	.el-col {
		border-radius: 4px;
	}

	.info {
		// background-color: black;
		border-radius: 10px;
	}
</style>
