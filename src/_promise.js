
const STATUS = {
	PENDING: 'pending',
	REJECTED: 'rejected',
	RESOLVED: 'resolved'
}

class MyPromise {
	constructor(executor) {
		try {
			executor(this.resolved, this.rejected)
		} catch (error) {
			this.rejected(error)
		}
	}
	state = STATUS.PENDING;
	value = '';
	error = '';
	resolveSubs = [];
	rejectedSubs = [];
	resolved =  (value) => {
		// 只有pending状态可以修改
		if (this.state !== STATUS.PENDING) return;
		this.state = STATUS.RESOLVED
		this.value = value
		while(this.resolveSubs.length) {
			this.resolveSubs.shift()(this.value)
		}
	};
	rejected = (error) => {
		// 只有pending状态可以修改
		if (this.state !== STATUS.PENDING) return;
		this.state = STATUS.REJECTED
		this.error = error
		while(this.resolveSubs.length) {
			let rejectFn = this.rejectedSubs.shift()
			rejectFn && rejectFn(this.error)
		}
	};
	then(success = () => {}, failed = () => {}) {
		const p = new MyPromise((resolve, reject) => {
			if (this.state === STATUS.REJECTED) {
				// 加一个异步任务，目的是为了让then里面的p有返回值
				setTimeout(() => {
					try {
						let s = failed(this.error)
						resolvePromise(p, s, resolve, reject)
					} catch (error) {
						reject(error)
					}
				}, 0)
			} else if (this.state === STATUS.RESOLVED) {
				// 加一个异步任务，目的是为了让then里面的p有返回值
				setTimeout(() => {
					try {
						let s = success(this.value)
						resolvePromise(p, s, resolve, reject)
					} catch (error) {
						reject(error)
					}
				}, 0)
			} else {
				this.resolveSubs.push(() => {
					// 加一个异步任务，目的是为了让then里面的p有返回值
					setTimeout(() => {
						try {
							let s = success(this.value)
							resolvePromise(p, s, resolve, reject)
						} catch (error) {
							reject(error)
						}
					}, 0)
				})
				this.rejectedSubs.push(() => {
					// 加一个异步任务，目的是为了让then里面的p有返回值
					setTimeout(() => {
						try {
							let s = failed(this.error)
							resolvePromise(p, s, resolve, reject)
						} catch (error) {
							reject(error)
						}
					}, 0)
				})
			}
		})
		return p
	}

	catch((cb) => {
		return this.then(success => {}, cb)
	})

	finnaly(onFinally = () => {}) {
		return this.then(resolve => onFinally(resolve), reject => onFinally(reject))
	}

	static all(array) {
		return new MyPromise((resolve, reject) => {
			let result = []
			let i = 0
			function addResult (key, val) {
				i++
				result[key] = val
				// 所有的任务完成之后执行回调
				if (i === array.length) {
					try {
						resolve(result)
					} catch (error) {
						reject(error)
					}
				}
			}
			for(let i = 0; i < array.length; i++) {
				if (array[i] instanceof MyPromise) {
					// 如果有一个异常，整个执行失败
					array[i].then(res => addResult(i, res), error => reject(error))
				} else {
					addResult(i, array[i])
				}
			}
		})
	}

	static resolve(value) {
		return value instanceof MyPromise ?
						 value : 
						 new MyPromise((resolve, reject) => {
							 try {	
								resolve(value)
							 } catch (error) {
								reject(error)
							 }
						 })
	}
}
function resolvePromise (promise, result, resolve, reject) {
	// 判断是否循环引用
	if (promise === result) {
		return reject(new TypeError('Chaining cycle...'))
	}
	if (result instanceof MyPromise) {
		// 如果是promise对象对象的话，执行then
		result.then(value => {
			try {
				resolve(value)
			} catch (e) {
				reject(error)
			}
		}, error => {
			reject(error)
		})
	} else {
		// 不是promise对象，直接执行resove
		resolve(result)
	}
}

let p = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve('hello p')
	}, 3000)
})
let p2 = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve('hello p2')
	}, 1000)
})

let p3 = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve('hello p3')
	}, 2000)
})

MyPromise
	.all([1, 2, p, 4, p2])
	.then(res => console.log(res))
	.finnaly(() => p3)
	.then(res => console.log(res))
	.catch()

// MyPromise.resolve(p)
// 	.then(res => {
// 		console.log(res)
// 		return p2
// 	})
// 	.then(res => console.log(res))



new Promise((resolve, reject) => {
	resolve()
	// reject()
}).then()


Promise.resolve(() => {})
Promise.reject(() => {})
Promise.all([])