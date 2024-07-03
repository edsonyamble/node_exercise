const EventEmitter = require('events') //это где будем создавать экземпля класс для отслежевание разных собиты
class Logger extends EventEmitter {
	log = msg => {
		console.log(msg)
		this.emit('some_event', { id: 2, text: 'second call event' })
	}
}
module.exports = Logger
//без extends
// const EventEmitter = require('events') //это где будем создавать экземпля класс для отслежевание разных собиты
// const util = require('util')
// class Logger {
// 	log = msg => {
// 		console.log(msg)
// 		this.emit('some_event', { id: 2, text: 'second call event' })
// 	}
// }
// util.inherits(Logger, EventEmitter)
// module.exports = Logger
//cree deux events dans deux file elle ne pourron pa etre  lu c est pour cela on utile claas qu on cree