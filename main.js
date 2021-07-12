const fs = require('fs')
const path = require('path')

function countFileSize (file) {
  let size = 0
  return new Promise(((resolve, reject) => {
    fs.stat(file, (err, stats) => {
      if (err) {
        reject(err)
        return
      }
      // 如果是文件直接返回文件大小
      if (stats.isFile()) {
        console.log(`file: ${file} ----: ${stats.size}`)
        resolve(stats.size)
        return
      }
      fs.readdir(file, async (err1, files) => {
        if (err1) {
          reject(err1)
          return
        }
        let fileLen = files.length
        if (fileLen) {
          for (let i = 0; i < fileLen; i ++) {
            size += await countFileSize(path.join(file, files[i]))
          }
          resolve(size)
        } else {
          resolve(size)
        }
      })
    })
  }))
}
countFileSize(null).then(size => {
  console.log(size)
}).catch(error => {
  console.log(error)
})