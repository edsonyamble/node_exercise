const { userName, name } = require('./test')
const os = require('os')//node module check platform
console.log(userName)
console.log(name(userName))
console.log(name('Ксеня'))
console.log(os.platform(), os.release(),os.cpus())
