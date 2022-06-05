const os = require('os')

console.log('Операционная система: ', os.platform())

console.log('Архитектура процессора: ', os.arch())

console.log('Инфа по процессорам: ', os.cpus())

console.log('Всего памяти: ', os.totalmem())

console.log('Дом-я директория: ', os.homedir())

console.log('Включен: ', os. uptime())