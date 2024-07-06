//const {worker} = require('worker_threads)
const express = require('express')
const app = express()

function generateRandomArr() {
	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min
	}
	const start = Date.now()
	const bigList = Array(20000)
		.fill()
		.map(_ => getRandomArbitrary(1, 10000))
	const fin = console.log(bigList.sort())
	console.log('finish -', (Date.now() - start) / 1000)
	return fin
}
// Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением.
// generateRandomArr()

app.get('/', (req, res) => {
	res.send('server working byr Edson')
})
app.get('/fat-operation', (req, res) => {
	generateRandomArr()
	res.send('finish worked server by Edson')
})
app.listen(3000, () => {
	console.log('server listening on port 3000')
})
