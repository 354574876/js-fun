/**
 * 防抖
 * @author HJJ 规定时间内只执行一次
 * @DateTime 2020-04-01T08:38:41+0800
 * @param    {[function]}                 excute [执行函数]
 * @param    {[int]}                 delay  [执行时间间隔]
 * @return   {[type]}                        [description]
 */
const debounce = function (excute, delay) {
	let timeout = null
	return function () {
		let args = arguments
		if (timeout) {
			clearTimeout(timeout)
		}
		timeout = setTimeout(() => {
			excute.apply(this, args)
		}, delay)
	}
}


const throttle = function (excute, delay) {
	const startTime = new Date().getTime()
	let timeout = null
	return function () {
		let args = arguments
		if (!timeout) {
			timeout = setTimeout(() => {
				timeout = null
				excute.apply(this, args)
			}, delay)
		}
	}
}
