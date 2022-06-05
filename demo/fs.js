const fs = require('fs') //file system
const path = require('path') 

// //создание папки test
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }

//   console.log('Папка создана')
// })

//создание файла 'test.txt'
const filePath = path.join(__dirname, 'test', 'test.txt')


// fs.writeFile(filePath, 'Hello NodeJS', err => {
fs.appendFile(filePath, '\nNew text', err => {
  if (err) {
    throw err
  } 
  console.log('Файл создан')
})

//метод writeFile - стирает существуюший контент
//метод appendFile - добавляет контент

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }

  console.log(content)

  // const data = Buffer.from(content)
  // console.log('Content: ', data.toString())
})