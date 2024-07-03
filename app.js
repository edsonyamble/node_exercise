//module sabiti or module event это сигнал который сообшает что что то произошло
// const EventEmitter = require('events') //это где будем создавать экземпля класс для отслежевание разных собиты
const Logger = require('./log')
const logger = new Logger()
// const emitter = new EventEmitter()
// 1 argument
// emitter.on('some_event', text => {
// 	console.log(text)
// }) //create event
// emitter.emit('some_event', 'call event!!!!yes') //call event
// any arguments
// emitter.on('some_event', args => {
// 	const { id, text } = args
// 	console.log(id, text)
// }) //create event
// emitter.emit('some_event', { id: 1, text: 'call event!!!!yes' }) //call event
// emitter.emit('some_event', { id: 2, text: 'second call event' })
logger.on('some_event', args => {
	const { id, text } = args
	console.log(id, text)
}) //create event
logger.log('User logged!!')
