import Vue from 'vue'


export default {
	install(Vue, options) {
		//时间戳转时间
		Vue.prototype.formatDate = function(value) {
			let date = new Date(value);
			let y = date.getFullYear();
			let MM = date.getMonth() + 1;
			MM = MM < 10 ? ('0' + MM) : MM;
			let d = date.getDate();
			d = d < 10 ? ('0' + d) : d;
			let h = date.getHours();
			h = h < 10 ? ('0' + h) : h;
			let m = date.getMinutes();
			m = m < 10 ? ('0' + m) : m;
			let s = date.getSeconds();
			s = s < 10 ? ('0' + s) : s;
			return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
		};
		//时间戳转时间(年月日)
		Vue.prototype.formatDateshow = function(value) {
			let date = new Date(value);
			let y = date.getFullYear();
			let MM = date.getMonth() + 1;
			MM = MM < 10 ? ('0' + MM) : MM;
			let d = date.getDate();
			d = d < 10 ? ('0' + d) : d;
			return y + '-' + MM + '-' + d;
		};
		//时间戳转时间（时分秒）
		Vue.prototype.formatDatetime = function(datetime, startType) {
			 var date = new Date(datetime); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
			  var year = date.getFullYear(),
			    month = ("0" + (date.getMonth() + 1)).slice(-2),
			    sdate = ("0" + date.getDate()).slice(-2),
			    hour = ("0" + date.getHours()).slice(-2),
			    minute = ("0" + date.getMinutes()).slice(-2),
			    second = ("0" + date.getSeconds()).slice(-2);
			  // 拼接
			  // var result = year + "-"+ month +"-"+ sdate +" "+ hour +":"+ minute +":" + second;
			  // 返回
			  // return result;
			  let resStr = "";
			  if (startType === "year")
			    resStr =
			      year +
			      "-" +
			      month +
			      "-" +
			      sdate +
			      " " +
			      hour +
			      ":" +
			      minute +
			      ":" +
			      second;
			  if (startType === "day") resStr = year + "-" + month + "-" + sdate;
			  if (startType === "month") resStr = month + "-" + sdate;
			  if (startType === "hour") resStr = hour + ":" + minute + ":" + second;
			  return resStr;
		};
		//base64转file
		Vue.prototype.dataURLtoFile = function(dataurl, filename) {
			var arr = dataurl.split(','),
				mime = arr[0].match(/:(.*?);/)[1],
				bstr = atob(arr[1]),
				n = bstr.length,
				u8arr = new Uint8Array(n);
			while (n--) {
				u8arr[n] = bstr.charCodeAt(n);
			}
			return new File([u8arr], filename, {
				type: mime
			});
		};
		//将base64转换成可用formdata提交的文件
		Vue.prototype.convertBase64UrlToBlob = function(urlData) {
			//去掉url的头，并转换为byte 
				var split = urlData.split(',');
				var bytes=window.atob(split[1]);        
				//处理异常,将ascii码小于0的转换为大于0  
				var ab = new ArrayBuffer(bytes.length);  
				var ia = new Uint8Array(ab);  
				for (var i = 0; i < bytes.length; i++) {  
					ia[i] = bytes.charCodeAt(i);  
				}  
				return new Blob( [ab] , {type : split[0]}); 
		};
		//计算时间差
		Vue.prototype.DateDifference = function(startDate, endDate) {
			var ms = endDate - startDate;
			if (ms < 0) return 0;
			return Math.floor(ms / 1000 / 60 / 60);
		};
	}
}
