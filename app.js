const fs = require('fs')
fs.readFile('./text.txt', 'utf8', (error, data) => {
	fs.mkdir('./file', () => {
		fs.writeFile('./file/text2.txt', `${data} new test`, error => {
			error ? console.log(error) : null
		})
	})
})
setTimeout(() => {
	if (fs.existsSync('./file/text2.txt')) {
		fs.unlink('./file/text2.txt', () => {console.log('delete text2.txt')})
	}
}, 4000)
setTimeout(() => {
	if (fs.existsSync('./file')) {
		fs.rmdir('./file', () => {console.log('delete file')})
	}
}, 8000)
