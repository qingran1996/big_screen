<template>
	<div class="right_title">
		<dv-loading v-if="!isshow" style="color: #F9FAFC;position: absolute;">Loading...</dv-loading>
		<el-row v-if="isshow" :gutter="24">
			<el-col :span="item.part" v-for="(item,index) in showText" :key="index">
				<div class="grid-content bg-purple1">
					<div v-if="item.name=='天气'" class="horn1">
						<skycon :condition="wether_Type_show" color="cornflowerblue" style="width: 50px;height: 50px;"></skycon>
						<div style="margin: auto 0;width: 100%;display: grid;">
							<div style="margin-bottom: 10px;">
								<span>{{city}}</span>
								<span>{{weather.type}}</span>
								<span>{{weather.fengxiang}}</span>
								<span>{{fengli_speed}}级</span>
							</div>
							<div>
								<span>{{weather.high}}</span>
								<span>{{weather.low}}</span>
							</div>
						</div>
					</div>
					<div v-else-if="item.name=='时间'" class="horn2">
						<div><i class="el-icon-pie-chart" style="font-size: 50px;color: cornflowerblue;"></i></div>
						<div style="margin: auto 0;width: 100%;">
							<div style="margin-bottom: 10px;">
								<span>当前时间: {{date}}</span>
							</div>
							<div>
								<span>{{today}}</span>
								<span>{{weeekday}}</span>
							</div>
						</div>
					</div>
					<div v-else class="horn3">
						<div><i class="el-icon-s-custom" style="font-size: 50px;color: cornflowerblue;"></i></div>
						<div style="font-size: 35px;color: cornflowerblue;margin: auto;">
							{{user}}
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isshow: false,
				user: 'admin',
				showText: [{
					name: '天气',
					url: '',
					part: 8
				}, {
					name: '时间',
					url: '',
					part: 8
				}, {
					name: '登陆用户',
					url: '',
					part: 8
				}],
				wether_Type: [{
						name: '阴转多云',
						type: 'cloudy'
					},
					{
						name: '晴',
						type: 'clear-day'
					}, {
						name: '多云',
						type: 'partly-cloudy-day'
					}, {
						name: '雨',
						type: 'rain'
					}, {
						name: '雪',
						type: 'snow'
					},
					{
						name: '雨夹雪',
						type: 'sleet'
					}, {
						name: '雾',
						type: 'fog'
					}
				],
				city: '',
				fengli_speed: '',
				weeekday: '',
				wether_Type_show: '',
				weather: {},
				date: Date.parse(new Date()),
				today: ''
			};
		},
		components: {},
		mounted() {
			this.fixedPos()
			this.today = this.formatDateshow(new Date())
			// console.log(new Date().getDay())
			let days = new Date().getDay()
			switch (days) {
				case 1:
					days = '星期一';
					break;
				case 2:
					days = '星期二';
					break;
				case 3:
					days = '星期三';
					break;
				case 4:
					days = '星期四';
					break;
				case 5:
					days = '星期五';
					break;
				case 6:
					days = '星期六';
					break;
				case 0:
					days = '星期日';
					break;
			}
			this.weeekday = days
			// console.log(this.today)
			this.date = this.formatDatetime(this.date, "hour")
			let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
			this.timer = setInterval(() => {
				_this.date = Date.parse(new Date()); // 修改数据date
				_this.date = _this.formatDatetime(_this.date, "hour")

			}, 1000)
		},
		beforeDestroy() {
			if (this.timer) {
				clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
			}
		},
		methods: {
			//获取定位
			fixedPos() {
				const _this = this
				const geolocation = new BMap.Geolocation()
				this.confirmLoading = true
				geolocation.getCurrentPosition(function(r) {
					if (this.getStatus() == BMAP_STATUS_SUCCESS) {
						let myGeo = new BMap.Geocoder()
						myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(result) {
							_this.confirmLoading = false
							if (result) {
								// console.log(result)
								_this.city = result.addressComponents.city
								_this.getWeather()
							}
							// _this.handleMarker(_this, r.point)
							// console.log(result)
						})
					} else {
						_this.$message.error('failed' + this.getStatus())
					}
				})
			},
			getWeather() {
				this.$axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city).then(res => {
					if (res.status == 200) {
						// console.log(res.data.data)
						this.weather = res.data.data.forecast[0]
						this.fengli_speed = res.data.data.forecast[0].fengli.replace(/[^0-9]/ig, "")
						this.wether_Type.map((msg) => {
							//拿当前json的id、name、time去分别跟输入的值进行比较
							//indexOf 如果在检索的字符串中没有出现要找的值是会返回-1的，所以我们这里不等于-1就是假设输入框的值在当前json里面找到的情况
							if (msg.name.indexOf(this.weather.type) != -1) {
								//然后把当前json添加到list数组中
								// console.log(msg)
								this.wether_Type_show = msg.type
							}
						})
						this.isshow = true
					}

				}).catch(res => {

				})
			}
		}
	};
</script>

<style scoped>
	.right_title {
		width: 39%;
		height: 120px;
		right: 1%;
		top: 5%;
		position: absolute;
		display: inline-block;
	}

	.el-tag {
		background-color: transparent;
		border: none;
	}

	.grid-content {
		/* transform: skewX(45deg); */
		border-radius: 10px;
		cursor: pointer;
		align-items: center;
		vertical-align: middle;
		text-align: center;
		margin: 1.5rem 0;
		color: #6495ED;
	}
	.grid-content span {
		font-size: 14px;
		margin: auto 5px;
	}
	/* .grid-content div {
		width: 100%;
		margin: auto 0;
	} */
	/* .horn {
		border-right: 1px solid #6495ED;
	} */
	.horn1,
	.horn2 {
		border-right: 1px solid #6495ED;
	}

	.horn1,
	.horn2,
	.horn3 {
		display: flex;
	}
</style>
