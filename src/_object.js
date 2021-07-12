/**
 * Object.js 
 * Object.assign 
 * Object.getPrototypeOf Object.setPrototypeOf
 * Object.keys 
 * Object.values 
 * Object.entries
 */
if (typeof Object.is !== 'function') {
	Object.defineProperty(Object, 'is', {
		value: function (x, y) {
			if (x === y) {
				// 针对 +0 不等于 -0的情况
				return x !== 0 ||  1/x === 1/y
			}
			return x !== x && y !== y
		},
		configurable: true,
	  enumerable: false,
	  writable: true
	})
}

/**
 * 拷贝对象
 * @author HJJ
 * @DateTime 2020-04-13T23:19:59+0800
 * @param    {[type]}                 obj  [description]
 * @param    {...[type]}              args [description]
 * @return   {[type]}                      [description]
 */
const _createObject = function (obj, ...args) {
	const constructor = obj.prototype
	obj.__proto__ = constructor
	const result = constructor.apply(this, args)
	return typeof result === 'object' ? result : obj
}

//观察者
class Observer {    
  constructor (fn, name) {
  	this.name = name
    this.update = fn    
  }
}
//被观察者
class Subject {    
    constructor() {        
        this.observers = []          //观察者队列    
    }    
    addObserver(observer) {          
        this.observers.push(observer)//往观察者队列添加观察者    
    }    
    notify() {                       //通知所有观察者,实际上是把观察者的update()都执行了一遍       
        this.observers.forEach(observer => {        
            observer.update()            //依次取出观察者,并执行观察者的update方法        
        })    
    }
}

var subject = new Subject()       //被观察者
const update = function () {console.log(this.name)}  //收到广播时要执行的方法
var ob1 = new Observer(update, 'dog')    //观察者1
var ob2 = new Observer(update, 'fish')    //观察者2
subject.addObserver(ob1)          //观察者1订阅subject的通知
subject.addObserver(ob2)          //观察者2订阅subject的通知
subject.notify()                  //发出广播,执行所有观察者的update方法

// **
// ** Reflect
// **
// 



const man = {
	name: 'superman',
	say(age = 18) {
		console.log('my name is:' + this.name, age)
	}
}


Reflect.apply(man.say, man, [28])

