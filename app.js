const { Worker } = require('worker_threads')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
	console.log('main page')
	console.log(req)
	res.send('server working by Edson')
})
app.get('/fat-operation', (req, res) => {
	// generateRandomArr()
	const used = Number(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
	console.log(`Memory fat operation ${used}mb`)
	const worker = new Worker(__dirname + '/worker.js', { workerData: null })
	worker.on('message', msg => {
		//message Worker
		console.log('Message from worker ', msg)
		res.send('finish')
		const used = Number(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
		console.log(`Memory fat operation used after send operation ${used}mb`)
	})
	worker.on('error', err => {
		console.error(`worker error ${err}`)
	})
	// res.send('finish worked server by Edson')
})
app.listen(3000, () => {
	console.log('server listening on port 3000')
})
