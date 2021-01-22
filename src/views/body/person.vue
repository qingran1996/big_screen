<template>
	<div class="person">
		<el-row style="height: 45%;">
			<el-col style="height: 100%;" v-for="(item,index) in personData" :key="index" :span="6">
				<div :id="item.idname" class="grid-content"></div>
				<div v-if="isshow" class="content">{{item.name}}</div>
			</el-col>
			<div v-if="isshow" class="personNav">
				<dv-border-box-12 style="border-radius: 10px;">信息</dv-border-box-12>
			</div>
		</el-row>
	</div>
</template>

<script>
	import Charts from '@jiaminghi/charts'
	export default {
		data() {
			return {
				isshow: false,
				personData: [{
					name: '在册人数',
					all: 1000,
					have: 250,
					gradient: ['rgb(138,92,226)'],
					idname: 'container1'
				}, {
					name: '在场人数',
					all: 1000,
					have: 400,
					gradient: ['rgb(230,183,93)'],
					idname: 'container2'
				}, {
					name: '管理人数',
					all: 1000,
					have: 365,
					gradient: ['rgb(61,242,75)'],
					idname: 'container3'
				}, {
					name: '特殊工种',
					all: 1000,
					have: 775,
					gradient: ['rgb(66,189,248)'],
					idname: 'container4'
				}]
			};
		},
		components: {},
		mounted() {
			for (let i = 0; i < this.personData.length; i++) {
				this.showEcharts(i)
			}
		},
		methods: {
			showEcharts(i) {
				setTimeout(() => {
					const container = document.getElementById(this.personData[i].idname)
					const myChart = new Charts(container)
					myChart.setOption({
						series: [{
							type: 'gauge',
							startAngle: -Math.PI / 2,
							endAngle: Math.PI * 1.5,
							arcLineWidth: 8,
							data: [{
								name: this.personData[i].name,
								value: (this.personData[i].have / this.personData[i].all) * 100,
								gradient: this.personData[i].gradient
							}],
							axisLabel: {
								show: true
							},
							axisTick: {
								show: false
							},
							pointer: {
								show: false
							},
							dataItemStyle: {
								lineCap: 'round'
							},
							details: {
								show: true,
								formatter: '{value}%',
								valueToFixed: 2,
								style: {
									fill: 'white',
									fontSize: 14
								}
							},
							backgroundArc: {
								show: true,
								style: {
									stroke: '#224590'
								}
							}
						}]
					})
					this.isshow = true
				}, 2000)
			}
		}
	};
</script>

<style scoped>
	.person {
		width: 100%;
		height: 100%;
	}

	.grid-content {
		text-align: center;
		height: 100%;
	}

	.content {
		text-align: center;
	}

	.personNav {
		height: 100%;
		width: 100%;
		margin-top: 5%;
		display: inline-block;
		position: relative;
	}
</style>
