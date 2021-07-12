const _flat = (array) => array.reduce((a, b) => {
	return a.concat(typeof b === 'object' ? _flat(b) : b)
}, [])


/**
 * 最长公共前缀
 * @author HJJ
 * @DateTime 2020-04-30T10:22:41+0800
 * @param    {[type]}                 array ['aaafsd', 'aawwewer', 'aaddfff', 'aaaa44444bbbb']
 * @return   {[type]}                 string  'aaaa'
 */
const _maxCommonString = array => {
	return array
					.map(item => item.match(new RegExp(`^${item.substring(0, 1)}+`))[0])
					.sort((a, b) => b.length - a.length)[0]
}


Array.prototype.flat = function() {
	return [].concat(this.map(item => Array.isArray(item) ? item.flat() : [item]))
}

const _formatComplexArray = array => Array.from(
	new Set(array.toString()
		.replace(/\[|\]/g, '')
		.split(',')
	)).sort((a, b) => a - b)

console.log(_formatComplexArray([1,[5,3,2],9,[8,9,7,[5,3,2]]]));

console.log(Reflect.parse)