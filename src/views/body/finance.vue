<template>
	<div class="finance">
		<el-row v-for="(item,index) in financeData" :key="index"  :gutter="20">
			<el-col :span="8">
				<div class="grid-content bg-purple">{{item.name}}</div>
			</el-col>
			<el-col :span="12">
				<el-progress :class="item.classname" :text-inside="true" :stroke-width="20" :percentage="item.progress"></el-progress>
			</el-col>
			<el-col :span="4">
				<div class="grid-content">{{item.text}}</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				financeData: [
					{
						name: '土方施工阶段',
						progress: 70,
						text: '200万',
						classname: 'showprogress1'
					},{
						name: '地下结构施工阶段',
						progress: 40,
						text: '200万',
						classname: 'showprogress2'
					},{
						name: '主体施工阶段',
						progress: 20,
						text: '200万',
						classname: 'showprogress3'
					},{
						name: '装修施工阶段',
						progress: 60,
						text: '200万',
						classname: 'showprogress4'
					}
				]
			};
		},
		components: {},
		mounted() {},
		methods: {}
	};
</script>

<style scoped>
	.finance {
		width: 100%;
		height: 100%;
		display: grid;
		vertical-align: middle;
		margin: auto;
		align-items: center;
	}
	.bg-purple {
		text-align: left;
		padding-left: 10px;
		font-size: 16px;
	}
	.showprogress1>>>.el-progress-bar__outer {
		background-color: rgb(21,71,80);
	}
	.showprogress1>>>.el-progress-bar__inner {
		background: linear-gradient(to right,rgba(21,71,80,0.5),rgb(67,229,143));
	}
	.showprogress2>>>.el-progress-bar__outer {
		background-color: rgb(15,50,116);
	}
	.showprogress2>>>.el-progress-bar__inner {
		background: linear-gradient(to right,rgba(21,71,80,0.5),rgb(115,232,241));
	}
	.showprogress3>>>.el-progress-bar__outer {
		background-color: rgb(59,56,63);
	}
	.showprogress3>>>.el-progress-bar__inner {
		background: linear-gradient(to right,rgba(21,71,80,0.5),rgb(219,206,91));
	}
	.showprogress4>>>.el-progress-bar__outer {
		background-color: rgb(15,50,116);
	}
	.showprogress4>>>.el-progress-bar__inner {
		background: linear-gradient(to right,rgba(21,71,80,0.5),rgb(3,122,214));
	}
</style>
