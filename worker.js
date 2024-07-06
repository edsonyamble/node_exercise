const { parentPort } = require('worker_threads')
function generateRandomArr() {
	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min
	}
	const start = Date.now()
	const bigList = Array(2000000)
		.fill()
		.map(_ => getRandomArbitrary(1, 10000))
	const fin = console.log(bigList.sort())
	console.log('finish -', (Date.now() - start) / 1000)
	parentPort.postMessage({ result: 'ok' })
	return fin
}
generateRandomArr()
