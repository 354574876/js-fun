Function.prototype.myCall = function (context, ...args) {
	if (typeof this !== 'function') {
		throw new TypeError('error')
	}
	const fn = Symbol('fn')
	context = context || window
	context[fn] = this
	const result = context[fn](...args)
	delete context[fn]
	return result
}

Function.prototype.myBind = function (context, ...args) {
	const _this = this
	return function (...newArgs) {
		return _this.apply(context, args.concat(newArgs))
	}
}


function Say (age) {
	console.log(this.name, age);
}

const Dog = {
	name: 'BingGO'
}

const dogSay = Say.myBind(Dog)
dogSay(3)