<template>
	<div class="device">
		<div class="devicelist" :style="{height: listheight,lineHeight: listheight}" v-for="(item,index) in deviceData" :key="index">
			<div class="leftgrid">
				<i class="el-icon-monitor"></i>
				<span style="margin-left: 10px;font-family: '新宋体'">{{item.name}}</span>
				<span  style="margin-left: 10px;color: #6495ED;font-size: 16px;">{{item.book}}</span>
				<el-tag size="mini" class="tagtype" style="margin-left: 10px;color: #6495ED;background-color: transparent;border-color: cornflowerblue;"
				 v-if="item.isIn==1" type="info" effect="plain">已录入</el-tag>
				<el-tag size="mini" class="tagtype" style="margin-left: 10px;color: #6495ED;background-color: transparent;border-color: cornflowerblue;"
				 v-else type="info" effect="plain">未录入</el-tag>
				<el-tag size="mini" class="tagtype" style="margin-left: 10px;color: #6495ED;background-color: transparent;border-color: cornflowerblue;"
				 v-if="item.isPass==1" type="info" effect="plain">已过期</el-tag>
				<el-tag size="mini" class="tagtype" style="margin-left: 10px;color: #6495ED;background-color: transparent;border-color: cornflowerblue;"
				 v-else type="info" effect="plain">未过期</el-tag>
			</div>
			<div class="rightgrid">
				<span v-if="item.type==1" style="color: limegreen;margin-right: 10px;font-family: '新宋体'">在线</span>
				<span v-else style="color: gray;margin-right: 10px;font-family: '新宋体'">离线</span>
			</div>
		</div>
		<!-- <el-row v-for="(item,index) in deviceData" :key="index">
			<el-col :span="24">
				<div class="grid-content">
					<div class="leftgrid">
						<i class="el-icon-monitor" style="font-size: 1.5rem;"></i>
						<span style="font-size: 1.2rem;margin-left: 10px;font-family: '新宋体'">{{item.name}}</span>
						<span v-show="item.book!=''" style="margin-left: 10px;color: #6495ED;font-size: 1rem;">{{item.book}}</span>
						<el-tag class="tagtype" style="margin-left: 10px;color: #6495ED;background-color: transparent;border-color: cornflowerblue;font-size: 0.8rem;"
						 v-if="item.isIn==1" type="info" effect="plain">已录入</el-tag>
						<el-tag class="tagtype" style="margin-left: 10px;color: #6495ED;background-color: transparent;border-color: cornflowerblue;font-size: 0.8rem;"
						 v-else type="info" effect="plain">未录入</el-tag>
						<el-tag class="tagtype" style="margin-left: 10px;color: #6495ED;background-color: transparent;border-color: cornflowerblue;font-size: 0.8rem;"
						 v-if="item.isPass==1" type="info" effect="plain">已过期</el-tag>
						<el-tag class="tagtype" style="margin-left: 10px;color: #6495ED;background-color: transparent;border-color: cornflowerblue;font-size: 0.8rem;"
						 v-else type="info" effect="plain">未过期</el-tag>
					</div>
					<div class="rightgrid">
						<span v-if="item.type==1" style="font-size: 1.2rem;color: limegreen;margin-right: 10px;font-family: '新宋体'">在线</span>
						<span v-else style="font-size: 1.2rem;color: gray;margin-right: 10px;font-family: '新宋体'">离线</span>
					</div>
				</div>
			</el-col>
		</el-row> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				listheight: '',
				deviceData: [{
					name: '#1升降机',
					book: '',
					isIn: 0,
					isPass: 1,
					type: 1
				}, {
					name: '#2塔基',
					book: '特种作业证',
					isIn: 0,
					isPass: 0,
					type: 0
				}, {
					name: '#1卸料',
					book: '',
					isIn: 1,
					isPass: 1,
					type: 1
				}, {
					name: '#1喷淋',
					book: '特种作业证',
					isIn: 1,
					isPass: 0,
					type: 1
				}, {
					name: '#5扬尘',
					book: '特种作业证',
					isIn: 1,
					isPass: 1,
					type: 1
				}]
			};
		},
		components: {},
		mounted() {
			this.listheight = document.querySelector('.device').clientHeight * 0.2 - 10 + 'px'
		},
		methods: {}
	};
</script>

<style scoped>
	.device {
		width: 100%;
		height: 100%;
		display: grid;
		vertical-align: middle;
		margin: auto;
		align-items: center;
	}
	.devicelist {
		font-size: 20px;
		margin: 5px 0;
		border-bottom: 1px solid deepskyblue;
		padding: 0 10px;
		border-radius: 5px;
	}
	.grid-content {
		/* background-color: rgb(3, 36, 117); */
		border-bottom: 1px solid deepskyblue;
		padding: 0 10px;
		height: 3rem;
		line-height: 3rem;
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

	.rightgrid span {
		cursor: pointer;
	}
</style>
